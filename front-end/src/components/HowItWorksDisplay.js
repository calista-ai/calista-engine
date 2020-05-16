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
            <svg className="background-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438 90">
                <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M1438 -0.000237664C1201.17 21.2404 961.354 32.0903 719 32.0903C476.646 32.0903 236.826 21.2404 0 -0.000244141L0 133.001H1438V-0.000237664Z" 
                    fill="currentColor"
                >
                </path>
            </svg>
        </div>
    )
    
  }
}

export default HowItWorksDisplay
