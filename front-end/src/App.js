import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
// import SearchDisplay from './components/SearchDisplay.js'
import './styles/App.css'

import LoadingDisplay from './components/LoadingDisplay.js'
import ResultDisplay from './components/ResultDisplay.js'

import IntroPageDisplay from './components/IntroPageDisplay.js'



class App extends Component {

  render() {
    const NotFoundRedirect = () => <Redirect to='/' />

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={IntroPageDisplay} />
            <Route path="/loading" component={LoadingDisplay} />
            <Route path="/result" component={ResultDisplay} />
            <Route component={NotFoundRedirect} />
          </Switch>
        </div>
      </Router>
    )

  }
}

export default App
