import React from 'react'
import universal from 'react-universal-component'

// REQUIRED: Of course, we have to use it!
const UniversalFoo = universal(() => import('./Foo'), {
  loading: <div>Foo is Loading...</div>,
  minDelay: 1500
})
const UniversalBar = universal(() => import('./Bar'), {
  loading: <div>Bar is Loading...</div>,
  minDelay: 1500
})

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        { this.state.selected === 'Home' &&
          <div>Home</div> }
        { this.state.selected === 'Foo' &&
          <UniversalFoo /> }
        { this.state.selected === 'Bar' &&
          <UniversalBar /> }

        <button onClick={ () => this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () => this.setState({ selected: 'Foo' }) }>
          Foo
        </button>
        <button onClick={ () => this.setState({ selected: 'Bar' }) }>
          Bar
        </button>
      </div>
    )
  }
}
