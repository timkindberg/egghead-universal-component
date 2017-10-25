import React from 'react'
import ReactDOM from 'react-dom'
// NEW
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './components/App'

const render = App => ReactDOM.hydrate(
  // NEW
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
)

// NEW
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App.js', () => {
    const App = require('./components/App').default
    render(App)
  })
}

render(App)
