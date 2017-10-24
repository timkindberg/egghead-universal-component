import React from 'react'
import ReactDOM from 'react-dom'
// import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './components/App'

const render = App =>
  // ReactDOM.hydrate(
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./components/App.js', () => {
//     const App = require('./components/App').default
//     render(App)
//   })
// }

render(App)
