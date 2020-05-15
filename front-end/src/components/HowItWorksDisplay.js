import React, { Component } from 'react'
import '../styles/HowItWorksDisplay.css'

class HowItWorksDisplay extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       userInput: '',
//       statusCode: 1,
//       response: {
//         score: null,
//         url: '',
//         imageURI: null
//       }
//     }


  render() {

    return (
        <div className="how-it-works-section">
            <div className="content-title">
                <div>
                    <p>How it Works</p>
                </div>
                <div className="content-items">
                    <div className="content-item">
                        <div className="content-item-img">
                            <img src="https://image.flaticon.com/icons/svg/1055/1055645.svg" />
                        </div>
                        <div className="content-item-title">
                            Step 1
                        </div>
                        <div className="content-item-description">
                            Just type the URL of the webpage that you want to evaluate its aesthetics
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="content-item-img">
                            <img src="https://image.flaticon.com/icons/svg/2103/2103832.svg" />
                        </div>
                        <div className="content-item-title">
                            Step 2
                        </div>
                        <div className="content-item-description">
                            Wait until magic happens
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="content-item-img">
                            <img src="https://image.flaticon.com/icons/svg/1455/1455324.svg" />
                        </div>
                        <div className="content-item-title">
                            Step 3
                        </div>
                        <div className="content-item-description">
                            The aesthetics score is ready!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
  }
}

export default HowItWorksDisplay
