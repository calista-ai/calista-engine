import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactStoreIndicator from 'react-score-indicator'

import LoadingDisplay from './LoadingDisplay.js'
import API from '../api.js'

import 'react-tabs/style/react-tabs.css'
import '../styles/ResultDisplay.css'

class ResultDisplay extends Component {

  constructor(props) {
    super(props)

    if (this.props.location.state === undefined)
    {
      this.state = {
        statusCode: 99
      }
    }
    else {

      this.state = {
        userInput: this.props.location.state.webpage,
        statusCode: this.props.location.state.statusCode,
        result: {
          score: this.props.location.state.score,
          url: this.props.location.state.webpage,
          imageURI: this.props.location.state.imageURI
        }
      }
    }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({userInput: event.target.value})
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.website)
    event.preventDefault()

    this.setState({statusCode: 2})

    API.post(`websites/evaluate`, { url: this.state.userInput})
      .then(res => {
         let score = res.data.score
         let url = res.data.url
         let imageURI = res.data.image

         // DEBUGGING PURPOSES
         // console.log(res.data)

         this.setState({result: {
           score: score,
           url: url,
           imageURI: imageURI
         }})
         this.setState({statusCode: 3})
      })
      .catch(err => {
        let failedURL = this.state.userInput
        this.setState({result: {
          score: null,
          url: failedURL,
          imageURI: null
        }})
        let status = err.response.status

        // DEBUGGING PURPOSES
        // console.log(status)

        this.setState({statusCode: 4})

        if (status === 500) {
          this.setState({
            statusCode: 5
          })
        }

      })
  }


  render() {

    if (this.state.statusCode === 99) {
      return (
        <Redirect to='/' />
      )
    }

    let TabPanelContext
    if (this.state.statusCode === 4) {
      TabPanelContext =
      (
        <div className="tab-panel">
          <TabPanel>
            <span className="intro-text">
              No results found for&nbsp;
              <span className="webpage-name">
                {this.state.result.url}
              </span>
              <br />
              Please make sure that the URL is valid.

            </span>
          </TabPanel>
          <TabPanel>
            <span className="intro-text">
              No results found for&nbsp;
              <span className="webpage-name">
                {this.state.result.url}
              </span>
              <br />
              Please make sure that the URL is valid.

            </span>
          </TabPanel>
        </div>
      )
    }
    else if (this.state.statusCode === 5)
    {
      TabPanelContext =
      (
        <div className="tab-panel">
          <TabPanel>
            <span className="intro-text">
              No results found for&nbsp;
              <span className="webpage-name">
                {this.state.result.url}
              </span>
              <br />
              An internal error occurred. If this error persists, please contact us.
            </span>
          </TabPanel>
          <TabPanel>
            <span className="intro-text">
              No results found for&nbsp;
              <span className="webpage-name">
                {this.state.result.url}

              </span>
              <br />
              An internal error occurred. If this error persists, please contact us.
            </span>
          </TabPanel>
        </div>
      )
    }
    else {
      TabPanelContext =
      (
        <div className="tab-panel">
          <TabPanel>
            <span className="intro-text">
              Below you can see the aesthetics score for the webpage&nbsp;
              <span className="webpage-name">
                {this.state.result.url}
              </span>:
            </span>
            <br />
            <div className="score-indicator">
              <ReactStoreIndicator
                lineWidth={10}
                width={250}
                value={this.state.result.score || 0}
                maxValue={10}
              />
            </div>

          </TabPanel>
          <TabPanel>
            <span className="intro-text">
              Below you can see the screenshot for the webpage&nbsp;
              <span className="webpage-name">
                {this.state.result.url}
              </span>:
            </span>
            <br />
            <div className="screenshot">
              <img src={this.state.result.imageURI} alt="screenshot" />
            </div>
          </TabPanel>
        </div>
      )
    }

    if (this.state.statusCode === 2)
    {
      return (
        <LoadingDisplay webpage={this.state.userInput} />
      )
    }
    else {
      
      return (
        <div>
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                value={this.state.userInput}
                onChange={this.handleChange}
                placeholder="Insert a url (eg. www.google.com)"
                autoComplete="off"
              />
              <button className="btn" type="submit"></button>
            </form>
          </div>
          <div className="results">
            <Tabs>

              <TabList>
                <div className="tab-list">
                  <Tab>
                    <span className="tab-title">Score</span>
                  </Tab>
                  <Tab disabled={!(this.state.statusCode === 3)}>
                    <span className="tab-title">Screenshot</span>
                  </Tab>
                </div>
              </TabList>
              {TabPanelContext}

            </Tabs>
          </div>
        </div>
      )
    }


  }
}

export default ResultDisplay
