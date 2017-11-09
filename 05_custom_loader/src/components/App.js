import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  minDelay: 750,
  loading: Loading,
  loadingTransition: false
})

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        <UniversalTab
          tab={ this.state.selected }
          isLoading={ true }
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
