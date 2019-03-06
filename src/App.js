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
      activities: activities,
      currentRound: 1,
      currentRoundActivityKeys: Object.keys(activities),
      currentRoundRequiredSelectionCount: Math.ceil(
        Object.keys(activities).length / 2
      )
    }

    this.resetSelection = () => {
      this.setState(() => ({
        selectedActivityKeys: [],
        currentRound: 1,
        currentRoundActivityKeys: Object.keys(activities),
        currentRoundRequiredSelectionCount: Math.ceil(
          Object.keys(activities).length / 2
        )
      }))
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

    this.proceedNextRound = () => {
      this.setState(state => ({
        selectedActivityKeys: [],
        currentRound: state.currentRound + 1,
        currentRoundActivityKeys: state.currentRoundActivityKeys.filter(key =>
          state.selectedActivityKeys.includes(key)
        ),
        currentRoundRequiredSelectionCount: Math.ceil(
          state.currentRoundRequiredSelectionCount / 2
        )
      }))
    }

    this.ableToProceedNextRound = () => {
      if (this.isEndOfRound()) return false
      return (
        this.state.selectedActivityKeys.length ===
        this.state.currentRoundRequiredSelectionCount
      )
    }

    this.isEndOfRound = () => this.state.currentRoundRequiredSelectionCount < 2
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
            selectedActivityCount: this.selectedActivityCount,
            proceedNextRound: this.proceedNextRound,
            ableToProceedNextRound: this.ableToProceedNextRound,
            isEndOfRound: this.isEndOfRound
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
