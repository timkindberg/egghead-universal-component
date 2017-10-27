import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'
import './App.css'

// NEW
const LazyTab = universal(({ tab }) => import(`./${tab}`), {
  minDelay: 500,
  alwaysDelay: true,
  loadingTransition: false
})

export default class App extends React.Component {
  state = { selected: 'Home', loading: false }

  loadStart = () => {
    this.setState({ loading: true })
  }

  loadEnd = () => {
    this.setState({ loading: false })
  }

  render() {
    return (
      <div>
        { this.state.loading && <Loading /> }
        <div className={ this.state.loading ? 'loading' : '' }>
          <LazyTab
            tab={ this.state.selected }
            onBefore={ this.loadStart }
            onAfter={ this.loadEnd }
          />
        </div>

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
