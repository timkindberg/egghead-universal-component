import React from 'react'
import universal from 'react-universal-component'
import Loading from './Loading'
import NotFound from './NotFound'
import './App.css'

const LazyTab = universal(({ tab }) => import(`./${tab}`), {
  minDelay: 500,
  alwaysDelay: true,
  loadingTransition: false,
  // Show this last
  error: NotFound
})

export default class App extends React.Component {
  state = { selected: 'Baz', loading: false, error: true }

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
            error={ this.state.error || this.state.forcedError }
          />
        </div>

        { ['Baz', 'Home', 'Foo', 'Bar'].map((tab, i) =>
          <button
            key={ i }
            onClick={ () => this.setState({ selected: tab }) }
          >
            { tab }
          </button>) }
          <button onClick={ () => this.setState({
              forcedError: !this.state.forcedError
                ? new Error('oh no')
                : null
          })}>
            Force Error
          </button>
      </div>
    )
  }
}
