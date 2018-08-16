import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Home from '../Home/Home'
import classNames  from 'classnames'
import { GOOGLE_ANALYTICS_ID } from '../../constants'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whiteThemeActive: false
    }
  }

  componentDidMount() {
    this.handleTheme()
    window.addEventListener('scroll', this.handleTheme)

    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(GOOGLE_ANALYTICS_ID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleTheme)
  }

  handleTheme = () => {
    const { scrollY } = window
    const { whiteThemeActive } = this.state
    const themeYBreakpoint = 500

    if (scrollY > themeYBreakpoint && !whiteThemeActive) {
      this.setState({ whiteThemeActive: true })
    } else if (scrollY <= themeYBreakpoint && whiteThemeActive) {
      this.setState({ whiteThemeActive: false })
    }
  }

  render() {
    const { whiteThemeActive } = this.state

    return (
      <div className={classNames('App', { AppWhite: whiteThemeActive })}>
        <Home />
      </div>
    )
  }
}

export default App
