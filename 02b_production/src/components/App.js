import React from 'react'
import './App.css'

const HomeTab = () => <div>Home</div>;
const FooTab = () => <div>Foo</div>;
const BarTab = () => <div>Bar</div>;

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
