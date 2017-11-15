import React from 'react'
import universal from 'react-universal-component'
import { connect } from 'react-redux'
import { selectTab } from '../actions/tabs'
import { getSelectedTab } from '../reducers/tabs'

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  onLoad(module, info, props, context) {
    if (module.reducers) {
      context.store.injectReducers(module.reducers)
    }
  }
})

class App extends React.Component {
  render() {
    const { selected, selectTab } = this.props;

    return (
      <div>
        <UniversalTab tab={ selected } />

        <button onClick={ () => selectTab('Home') }>
          Home
        </button>
        <button onClick={ () => selectTab('Foo') }>
          Foo
        </button>
        <button onClick={ () => selectTab('Bar') }>
          Bar
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected: getSelectedTab(state)
})

const mapDispatchToProps = { selectTab }

export default connect(mapStateToProps, mapDispatchToProps)(App)
