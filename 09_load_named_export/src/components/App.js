import React from 'react'
import HomeTab from './Home'
import universal from 'react-universal-component'

const FooTab = universal(import('./Foo'), {
  key: 'Foo'
})
const BarTab = universal(import('./Bar'), {
  key: (module) => module.Bar
})

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        { this.state.selected === 'Home' &&
          <HomeTab /> }
        { this.state.selected === 'Foo' &&
          <FooTab /> }
        { this.state.selected === 'Bar' &&
          <BarTab /> }

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
