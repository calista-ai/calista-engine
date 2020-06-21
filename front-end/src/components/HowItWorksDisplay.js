import React, { Component } from 'react'
import '../styles/HowItWorksDisplay.css'
import Step1 from '../assets/img/step1.svg'
import Step2 from '../assets/img/step2.svg'
import Step3 from '../assets/img/step3.svg'

class HowItWorksDisplay extends Component {

  render() {

    return (
        <div className="how-it-works-section" id="how-it-works-section">
            <div className="content-title">
                <div>
                    <p>How it Works</p>
                </div>
                <div className="content-items">
                    <div className="content-item">
                        <div className="content-item-img">
                            <img src={Step1} alt="" />
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
                            <img src={Step2} alt="" />
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
                            <img src={Step3} alt="" />
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
