import React, { Component } from 'react'
import { css } from '@emotion/core'
// import PropagateLoader from 'react-spinners/PropagateLoader'
import MoonLoader from 'react-spinners/MoonLoader'
import '../styles/LoadingDisplay.css'


class LoadingDisplay extends Component {

  render() {
    // const override = css`
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // `

    const webpageName = this.props.webpage

    return (
      <div className="loading-section">

        <div className="logo">
          <span>Calista</span>
        </div>
        <div className="spinner">
          {/* <PropagateLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={'#FFFFFF'}
            loading={true}
          /> */}
          <MoonLoader
            // css={override}
            size={70}
            // margin={50}
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
