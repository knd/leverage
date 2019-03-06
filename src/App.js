import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createTheme, ThemeContext } from 'paramount-ui'

import { NavigationBar } from './components/NavigationBar'
import Home from './pages/Home'

import { ProgressContext } from './contexts/ProgressContext'
import activities from './data/activities'

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
      selectedActivityKeys: [],
      totalActivityCount: Object.keys(activities).length,
      activities: activities
    }

    this.resetSelection = () => {
      this.setState(() => ({ selectedActivityKeys: [] }))
    }

    this.isActivitySelected = activityKey =>
      this.state.selectedActivityKeys.includes(activityKey)

    this.selectActivity = activityKey => {
      this.setState(state => ({
        selectedActivityKeys: state.selectedActivityKeys.concat([activityKey])
      }))
    }

    this.unselectActivity = activityKey => {
      this.setState(state => ({
        selectedActivityKeys: state.selectedActivityKeys.filter(
          key => key !== activityKey
        )
      }))
    }

    this.selectedActivityCount = () => this.state.selectedActivityKeys.length
  }

  render() {
    return (
      <Router>
        <ProgressContext.Provider
          value={{
            ...this.state,
            isActivitySelected: this.isActivitySelected,
            selectActivity: this.selectActivity,
            unselectActivity: this.unselectActivity,
            resetSelection: this.resetSelection,
            selectedActivityCount: this.selectedActivityCount
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
