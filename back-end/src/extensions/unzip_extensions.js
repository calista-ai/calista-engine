const unzip = require("unzip-crx-3")

const basePath = process.cwd();
const cookieIgnorePath = `${basePath}/src/extensions/cookieconsent`
console.log(cookieIgnorePath)

const crxFile = `${cookieIgnorePath}/extension_3_3_0_0.crx`

unzip(crxFile, cookieIgnorePath).then(() => {
  console.log("Successfully unzipped crx file..");
})