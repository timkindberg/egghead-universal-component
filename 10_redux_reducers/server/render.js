import React from 'react'
import ReactDOM from 'react-dom/server'
import { flushChunkNames } from 'react-universal-component/server'
import { Provider } from 'react-redux'
import flushChunks from 'webpack-flush-chunks'
import App from '../src/components/App'
import configureStore from '../src/configureStore'

const store = configureStore()

export default ({ clientStats }) => (req, res) => {
  const initialState = JSON.stringify(store.getState());
  const app = ReactDOM.renderToString(
    <Provider store={ store }>
      <App />
    </Provider>
  )
  const chunkNames = flushChunkNames()

  const {
    js,
    styles,
    cssHash,
    scripts,
    stylesheets
  } = flushChunks(clientStats, { chunkNames })

  console.log('PATH', req.path)
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames)
  console.log('SCRIPTS SERVED', scripts)
  console.log('STYLESHEETS SERVED', stylesheets)

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>react universal from scratch</title>
          ${styles}
        </head>
        <body>
          <script>
            window.__INITIAL_STATE__ = ${initialState}
          </script>
          <div id="root">${app}</div>
          ${cssHash}
          ${js}
        </body>
      </html>`
  )
}
