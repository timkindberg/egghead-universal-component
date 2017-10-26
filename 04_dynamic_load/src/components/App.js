import React from 'react'
import universal from 'react-universal-component'

// NEW
const LazyTab = universal(({ tab }) => import(`./${tab}`))

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        <LazyTab tab={ this.state.selected } />

        { ['Home', 'Foo', 'Bar'].map(tab =>
          <button onClick={ () => this.setState({ selected: tab }) }>
            { tab }
          </button>) }
      </div>
    )
  }
}
