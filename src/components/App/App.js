import React, { Component } from 'react'
import Home from '../Home/Home'
import classNames  from 'classnames'
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
