import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../api.js'
import LoadingDisplay from './LoadingDisplay.js'

import '../styles/SearchDisplay.css'
import Arrow from '../assets/img/arrow.svg'

class SearchDisplay extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      statusCode: 1,
      response: {
        score: null,
        url: '',
        imageURI: null
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

         this.setState({response: {
           score: score,
           url: url,
           imageURI: imageURI
         }})
         this.setState({statusCode: 3})
      })
      .catch(err => {
        let status = err.response.status

        // DEBUGGING PURPOSES
        // console.log(status)

        this.setState({statusCode: 4})

        if (status === 500) {
          this.setState({statusCode: 5})
        }
      })
  }

  render() {

    if (this.state.statusCode === 2)
    {
      return (
        <LoadingDisplay webpage={this.state.userInput} />
      )
    }
    else if (this.state.statusCode === 1) {
      return (
        <div className="search-section" id="search-section">
          <div className="logo">
            <span>Calista</span>
          </div>
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
          <div className="description">
          <span>A deep learning powered engine to measure your website{"'"}s aesthetics</span>
          </div>
          <div>
            <a className="arrow" href="#how-it-works-section">
              <img src={Arrow} loading="lazy" alt="" />
            </a>
          </div>
        </div>
      )
    }
    else {
      return (
        <Redirect push to={{
          pathname: '/result',
          state: {
            webpage: this.state.response.url || this.state.userInput,
            score: this.state.response.score,
            imageURI: this.state.response.imageURI,
            statusCode: this.state.statusCode
          }

        }} />
      )
    }
  }
}

export default SearchDisplay
