import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'

// NEW
const LazyTab = universal(({ tab }) => import(`./${tab}`), {
  loading: <Loading />,
  minDelay: 1000,
  loadingTransition: true
})

export default class App extends React.Component {
  state = { selected: 'Home' }

  render() {
    return (
      <div>
        <LazyTab tab={ this.state.selected } />

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
