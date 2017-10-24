import React from 'react'
import universal from 'react-universal-component'

const UniversalFoo = universal(() => import('./Foo'))
const UniversalBar = universal(() => import('./Bar'))

export default class App extends React.Component {
  state = { selected: 'Foo' }

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
