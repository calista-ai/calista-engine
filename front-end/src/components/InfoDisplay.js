import React, { Component } from 'react'
import '../styles/InfoDisplay.css'
import Item1 from '../assets/img/item1.png'
import Item2 from '../assets/img/item2.png'
import Item3 from '../assets/img/item3.png'

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
                  A streamlined web app that helps you measure your website's appealingness to users in just a few seconds. 
                  <br /><br />
                  100% open source and free of charge.
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
                  The assessment process is based on a deep learning model that presents high correlation to human perception concerning website aesthetics. 
                  <br /><br />
                  Utilize Calista's knowledge gained by real users in order to produce attractive designs and enhance user experience.
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
                  Calista's efficiency is constantly improving by collecting new data.
                  <br /><br />
                  Our goal is to provide a tool that can serve as a reliable guide in the hands of designers and developers during the design process. 
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
