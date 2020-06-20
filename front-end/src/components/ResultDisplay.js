import React, { Component } from 'react'
import ReactScoreIndicator from 'react-score-indicator'

import '../styles/ResultDisplay.css'

import NotFoundImg from '../assets/img/not-found.png'


class ResultDisplay extends Component {

    render() {

        const aestheticsScore = this.props.result.score 
        const webpage = this.props.result.url
        const screenshot = this.props.result.imageURI
        const statusCode  = this.props.statusCode
        
        if (statusCode === 4) {
            return (
                <div className="result-error-section">
                    <div className="error-section">
                        <div className="error-illustration">
                            <img src={NotFoundImg} alt="" />
                        </div>
                        <div className="content-text">
                            <div className="title">
                                <p>No results found for
                                <br />
                                <span className="webpage">{webpage}</span>
                                </p>
                            </div>
                            <div className="description">
                                <p>Please make sure that the URL is valid.</p>
                            </div>
                        </div>
                    </div>                
                </div>
            )
        }
        else if (statusCode === 5) {
            return (
                <div className="result-error-section">
                    <div className="error-section">
                        <div className="error-illustration">
                            <img src={NotFoundImg} alt="" />
                        </div>
                        <div className="content-text">
                            <div className="title">
                                <p>No results found for {webpage}.</p>
                            </div>
                            <div className="description">
                                <p>An internal error occurred. If this error persists, please contact us.</p>
                            </div>
                        </div>
                    </div>                
                </div>
            )
        }
        else {
            return (
                <div className="result-section">
                    <div className="score-section">
                        <div className="title">
                            <p>Aesthetics score:</p>
                        </div>
                        <div className="score-indicator">
                            <ReactScoreIndicator
                                lineWidth={10}
                                width={250}
                                value={aestheticsScore || 0}
                                maxValue={10}
                            />
                            <div className="webpage">
                                <a href={webpage} target="_blank" rel="noopener noreferrer">{webpage}</a>
                            </div>
                        </div>
                    </div>
                    <div className="screenshot-section">
                        <div className="title">
                            <p>Screenshot used:</p>
                        </div>
                        <div className="screenshot">
                            <img src={screenshot} alt="" />
                        </div>
                    </div>
                </div>            
            )
        }

    }
}

export default ResultDisplay
