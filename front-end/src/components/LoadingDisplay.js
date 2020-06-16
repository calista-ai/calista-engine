import React, { Component } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import '../styles/LoadingDisplay.css'


class LoadingDisplay extends Component {

  render() {

    const webpageName = this.props.webpage

    return (
      <div className="loading-section">
        <div className="logo">
          <span>Calista</span>
        </div>
        <div className="spinner">
          <MoonLoader
            size={70}
            color={'#FFFFFF'}
            loading={true}
          />
        </div>

        <div className="loading-message">
          <span>Evaluating the webpage</span>
          <br />
          <span className="webpage">{webpageName}</span>
        </div>

      </div>
    )
  }
}

export default LoadingDisplay
