import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize-scss/sass/_normalize.scss'
import './index.scss'
import App from './components/App/App'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'

WebFont.load({
  google: {
    families: ['Open+Sans:200,300,400,500,600', 'sans-serif']
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
