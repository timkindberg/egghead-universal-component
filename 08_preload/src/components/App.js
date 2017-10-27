import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'
import './App.css'

const LazyTab = universal(({ tab }) => import(`./${tab}`), {
  minDelay: 500,
  alwaysDelay: true,
  loadingTransition: false
})

export default class App extends React.Component {
  state = { selected: 'Home', loading: false, error: false }

  loadStart = () => {
    this.setState({ loading: true, error: false })
  }

  loadEnd = () => {
    this.setState({ loading: false })
  }

  loadError = (error) => {
    this.setState({ error })
    console.log(error)
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
            onError={ this.loadError }
            error={ this.state.error }
          />
        </div>

        { ['Home', 'Foo', 'Bar'].map((tab, i) =>
          <button
            key={ i }
            onClick={ () => this.setState({ selected: tab }) }
            onMouseEnter={ () => LazyTab.preload({ tab }) }
          >
            { tab }
          </button>) }

          <button onClick={ () => LazyTab.preload({ tab: 'Foo' }) }>
            Preload Foo
          </button>
          <button onClick={ () => LazyTab.preload({ tab: 'Bar' }) }>
            Preload Bar
          </button>
      </div>
    )
  }
}
