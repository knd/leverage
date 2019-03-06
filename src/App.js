import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavigationBar } from './components/NavigationBar'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
