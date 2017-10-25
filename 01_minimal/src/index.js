import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const render = App => ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
)

render(App)
