import React from 'react'
import universal from 'react-universal-component'

const UniversalTab = universal(({ tab }) => import(`./${tab}`))

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        <UniversalTab tab={ this.state.selected } />

        { ['Home', 'Foo', 'Bar'].map((tab, i) =>
          <button
            key={ i }
            onClick={ () => this.setState({ selected: tab }) }
          >
            { tab }
          </button>) }
      </div>
    )
  }
}
