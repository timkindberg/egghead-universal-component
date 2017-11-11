import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'
import NotFound from './NotFound'
import './App.css'

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  error: NotFound
})

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div>
        { this.state.selected &&
          <UniversalTab
            tab={ this.state.selected }
            onError={ (error) => console.log(error) }
          />
        }

        <button onClick={ () =>
            this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () =>
            this.setState({ selected: 'Broken' }) }>
          Broken
        </button>
      </div>
    )
  }
}
