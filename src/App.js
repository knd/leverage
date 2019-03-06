import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createTheme, ThemeContext } from 'paramount-ui'

import { ProgressContext } from './contexts/ProgressContext'
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
  constructor(props) {
    super(props)
    this.state = {
      selectedCardCount: 0
    }

    this.incrementSelectedCardCount = () => {
      this.setState(state => ({
        selectedCardCount: state.selectedCardCount + 1
      }))
    }

    this.resetSelectedCardCount = () => {
      this.setState(state => ({
        selectedCardCount: 0
      }))
    }
  }

  render() {
    return (
      <Router>
        <ProgressContext.Provider
          value={{
            ...this.state,
            incrementSelectedCardCount: this.incrementSelectedCardCount
          }}
        >
          <ThemeContext.Provider value={theme}>
            <NavigationBar />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </ThemeContext.Provider>
        </ProgressContext.Provider>
      </Router>
    )
  }
}

export default App
