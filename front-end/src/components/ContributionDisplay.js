import React, { Component } from 'react'
import '../styles/ContributionDisplay.css'
import Item4 from '../assets/item4.gif'

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
              <p>Help us Improve! <img src="https://lh3.googleusercontent.com/proxy/_bxP8oZ_D3LjOtKdXR0bAYlwFkEe5m4jz6rL65n66awzetKZG5XFEqwVbu6G4-jd9A9n4JNCtOYYPBeVGvlL6HjZnb-HjmlWlyCaAfcy0Dlbm4PWZN0BResFZh4NhLJ3Yj3bElWoHgkZU7U2ECQYqVLwn1M" /></p>
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
        
        {/* <div className="title">
          <p>Help us Improve!</p>
        </div> */}
      </div>
    )
    
  }
}

export default ContributionDisplay
