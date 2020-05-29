import React, { Component } from 'react'

import SearchDisplay from "./SearchDisplay.js";
import HowItWorksDisplay from "./HowItWorksDisplay.js"
import InfoDisplay from "./InfoDisplay.js"
import ContributionDisplay from "./ContributionDisplay.js"
import Footer from "./Footer.js"

class IntroPageDisplay extends Component {

    render() {
        return (
            <div>
                <div>
                    <SearchDisplay />
                    <HowItWorksDisplay />
                    <InfoDisplay />
      
                    <ContributionDisplay /> 
                    <Footer />
                </div>
            </div>
        )
    }
}

export default IntroPageDisplay