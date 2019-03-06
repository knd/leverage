import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createTheme, ThemeContext } from 'paramount-ui'

import { NavigationBar } from './components/NavigationBar'
import Home from './pages/Home'

const theme = createTheme({
  colors: {
    background: {
      secondary: {
        default: '#f3b058'
      }
    }
  },
  text: {
    primary: '#3fa296'
  },
  fontFamilies: {
    text: "'proxima-nova', Arial, Helvetica, sans-serif",
    heading: "'jubilat'"
  }
})

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeContext.Provider value={theme}>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </ThemeContext.Provider>
      </Router>
    )
  }
}

export default App
