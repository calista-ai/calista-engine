import React, { Component } from 'react'
import ReactPageScroller from "react-page-scroller";

import SearchDisplay from "./SearchDisplay.js";
import FirstComponent from "./FirstComp";
import SecondComponent from "./SecondComp";

import HowItWorksDisplay from "./HowItWorksDisplay.js"

import InfoDisplay from "./InfoDisplay.js"

class IntroPageDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }
    
    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };


    render() {
        return (
            <div>
                <div>

                    <SearchDisplay />
                    <HowItWorksDisplay />
                    <InfoDisplay />
      
     
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default IntroPageDisplay