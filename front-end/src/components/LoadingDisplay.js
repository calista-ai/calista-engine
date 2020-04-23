import React, { Component } from 'react'
import { css } from '@emotion/core'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Logo from '../assets/logo_transparent.png'


import '../styles/LoadingDisplay.css'


class LoadingDisplay extends Component {

  render() {
    const override = css`
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const webpageName = this.props.webpage

    return (
      <div>
        <div className="wrapper">

          <div className="logo">
            <img src={Logo} alt="logo"/>
          </div>
          <div className="spinner">
            <PropagateLoader
              css={override}
              sizeUnit={"px"}
              size={15}
              color={'#8ecedf'}
              loading={true}
            />
          </div>

          <div className="loading-message">
            <span>Evaluating the webpage</span>
            <br />
            <span className="webpage">{webpageName}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default LoadingDisplay
