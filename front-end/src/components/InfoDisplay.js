import React, { Component } from 'react'
import '../styles/InfoDisplay.css'
import Item1 from '../assets/item1.png'
import Item2 from '../assets/item2.png'
import Item3 from '../assets/item3.png'

class InfoDisplay extends Component {

  render() {

    return (
      <div className="info-section">
        <div className="info-title">
          <p>
            Providing<br />Website Aesthetics As a Service.
          </p>
        </div>
        <div className="info-items">
          <div className="info-item">
            <div className="info-item-text">
              <div className="info-item-title">
                <p>A tool from developers to developers</p>
              </div>
              <div className="info-item-description">
                <p>
                  Here goes text. Here goes text. Here goes text. Here goes text. Here goes text.
                </p>
              </div>
            </div>
            <div className="info-item-image">
              <img src={Item1} alt="" />
            </div>
          </div>
          <div className="info-item-reverse">
            <div className="info-item-reverse-image">
              <img src={Item2} alt="" />
            </div>
            <div className="info-item-reverse-text">
              <div className="info-item-title">
                <p>AI-powered</p>
              </div>
              <div className="info-item-description">
                <p>
                  Here goes text. Here goes text. Here goes text. Here goes text. Here goes text.
                </p>
              </div>
            </div>  
          </div>
          <div className="info-item">
            <div className="info-item-text">
              <div className="info-item-title">
                <p>Constantly improving</p>
              </div>
              <div className="info-item-description">
                <p>
                  Here goes text. Here goes text. Here goes text. Here goes text. Here goes text.
                </p>
              </div>
            </div>
            <div className="info-item-image">
              <img src={Item3} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default InfoDisplay
