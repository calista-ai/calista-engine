const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const tmp = require('tmp')

const cors = require('cors')

const puppeteer = require('puppeteer')

const request = require('request-promise')
const fs = require('fs')
const imageDataURI = require('image-data-uri')

const websiteRoutes = express.Router()


const PORT = process.env.PORT || 4000

const config = {
  launchOptions: {
    headless: true,
    args: [
        // Required for Docker version of Puppeteer
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // This will write shared memory files into /tmp instead of /dev/shm,
        // because Docker’s default for /dev/shm is 64MB
        '--disable-dev-shm-usage'
      ]
  },
  viewport: {
    width: 1366, 
    height: 694
  }

}

app.use(cors())
app.use(bodyParser.json())

function processInputUrl(url) {
  url = url.trim()

  if (!(url.toLowerCase().search('http:') === 0 || url.toLowerCase().search('https:') === 0)) {
    url = "http://".concat(url)
  }

  // ToDO: add protection against XSS

  return url

}

async function getWebpageImage(url, imagePath) {

  return puppeteer.launch(config.launchOptions)
    .then(async browser => {

      let succeeded = true

      try {
        const page = await browser.newPage()

        await page.setViewport(config.viewport)

        await page.goto(url, {"waitUntil": "networkidle0"})

        await page.screenshot({ path: imagePath })

      }

      catch(err) {
        console.log('Website cannot be reached')
        console.log(err)

        succeeded = false
      }

      await browser.close()

      return succeeded
    })
}

websiteRoutes.route('/evaluate').post((req, res) => {
  let inputUrl = req.body.url

  console.log('The url is ' + inputUrl)

  let url = processInputUrl(inputUrl)
  console.log('The processed url is ' + url)

  let imagePath = tmp.tmpNameSync({template: 'image-tmp/tmp-XXXXXX.png'})
  console.log('The image path is ' + imagePath)

  getWebpageImage(url, imagePath)
    .then(async (succeeded) => {

      console.log('Got webpage screenshot: ' + succeeded)

      if (succeeded) {

        let data = {
          "imagePath": imagePath
        }

        let options = {
          method: 'POST',
          uri: 'http://cnn:5000/run_cnn',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data,
          // resolveWithFullResponse: true,
          json: true // Automatically stringifies the body to JSON
        }

        let encoding = imageDataURI.encodeFromFile(imagePath)

        request(options)
          .then((parseBody) => {

            const score = parseBody.score
            console.log('The score is ' + Number((score).toFixed(2)))
            encoding.then(dataURI => {
              res.status(200).send({
                'score': Number((score).toFixed(2)),
                'url': url,
                'image': dataURI
              })
            })
              // .then(() => {
              //   setTimeout(() => {
              //     fs.unlink(imagePath, (err) => {
              //       if (err) throw err;
              //       console.log(imagePath + ' was deleted');
              //     })
              //   }, 2000)
              // })

          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({statusCode: 5})
          })

      }
      else {
        res.status(400).send({statusCode: 4})
      }

    })

})

app.use('/websites', websiteRoutes)

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})
