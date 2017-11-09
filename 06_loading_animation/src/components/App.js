import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'
import './App.css'

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  minDelay: 500,
  alwaysDelay: true,
  loadingTransition: false
})

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        <UniversalTab
          tab={ this.state.selected }
        />

        <button onClick={ () =>
            this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () =>
            this.setState({ selected: 'Foo' }) }>
          Foo
        </button>
        <button onClick={ () =>
            this.setState({ selected: 'Bar' }) }>
          Bar
        </button>
      </div>
    )
  }
}
