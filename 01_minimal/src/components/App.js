import React from 'react'

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        { this.state.selected === 'Home' &&
          <div>Home</div> }
        { this.state.selected === 'Foo' &&
          <div>Foo</div> }
        { this.state.selected === 'Bar' &&
          <div>Bar</div> }

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
