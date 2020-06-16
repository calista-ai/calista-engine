import React, { Component } from 'react'
import '../styles/ContributionDisplay.css'
import Item4 from '../assets/img/item4.gif'
import Rocket from '../assets/img/rocket.png'

class ContributionDisplay extends Component {

  render() {

    return (
      <div className="contribution-section">
        
        <div className="contribution-container">
          <div className="contribution-section-image">
            <img src={Item4} alt="" />
          </div>
          <div className="contribution-container-inner">
            <div className="contribution-container-title">
              <p>Help us Improve! <img src={Rocket} alt="" /></p>
            </div>
            <div className="contribution-container-text">
              <p>Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. Here goes text. </p>
            </div>
            <div className="contribution-container-button">
              <a href="https://data.calista.app" target="_blank" rel="noopener noreferrer">
                <button type="button"><span>Participate!</span></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default ContributionDisplay
