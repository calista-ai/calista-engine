import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import LoadingDisplay from './components/LoadingDisplay.js'
import IntroPageDisplay from './components/IntroPageDisplay.js'
import ResultPageDisplay from './components/ResultPageDisplay.js'

import './styles/App.css'

class App extends Component {

  render() {
    const NotFoundRedirect = () => <Redirect to='/' />

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={IntroPageDisplay} />
            <Route path="/loading" component={LoadingDisplay} />
            <Route path="/result" component={ResultPageDisplay} />
            <Route component={NotFoundRedirect} />
          </Switch>
        </div>
      </Router>
    )

  }
}

export default App
