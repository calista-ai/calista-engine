import React, { Component } from 'react'
import ReactScoreIndicator from 'react-score-indicator'

import '../styles/ResultSection.css'


class ResultSection extends Component {

    render() {

        const aestheticsScore = this.props.result.score 
        const webpage = this.props.result.url
        const screenshot = this.props.result.imageURI
        const statusCode  = this.props.statusCode
        
        if (statusCode === 4) {
            return (
                <div className="result-section">
                    <div className="error-section">
                        No results found for {webpage}. Please make sure that the URL is valid.
                    </div>
                </div>
            )
        }
        else if (statusCode === 5) {
            return (
                <div className="result-section">
                    <div className="error-section">
                        No results found for {webpage}. An internal error occurred. If this error persists, please contact us.
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

export default ResultSection
