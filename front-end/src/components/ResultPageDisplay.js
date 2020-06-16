import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import ResultDisplay from './ResultDisplay.js'
import ContributionDisplay from "./ContributionDisplay.js"
import Footer from "./Footer.js"
import LoadingDisplay from './LoadingDisplay.js'
import API from '../api.js'

import '../styles/ResultPageDisplay.css'

class ResultPageDisplay extends Component {

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
    else if (this.state.statusCode === 2)
    {
      return (
        <LoadingDisplay webpage={this.state.userInput} />
      )
    }
    else {
      return (
        <div className="result-page">
          <div className="search-section-header">
            {/* <div className="logo">
                <span>Calista</span>
            </div> */}
            <div className="search">
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  value={this.state.userInput}
                  onChange={this.handleChange}
                  placeholder="Insert a url (eg. www.google.com)"
                  autoComplete="off"
                />
                <button className="btn" type="submit"></button>
              </form>
            </div>
          </div>
          <ResultDisplay 
            statusCode={this.state.statusCode} 
            result={this.state.result}
          />
          <ContributionDisplay />
          <Footer />
        </div>
      )
    }

  }
}

export default ResultPageDisplay
