import React from 'react'
import { connect } from 'react-redux'
import { setIndex } from '../actions/foo'
import foo, { getIndex } from '../reducers/foo'
import './Foo.css'

export const reducers = { foo }

const Foo = ({ index, setIndex }) =>
  <div className='Foo'>
    Foo is Loaded: { index }
    <button onClick={ () => setIndex(index + 1) }>+</button>
    <button onClick={ () => setIndex(index - 1) }>-</button>
  </div>

const mapStateToProps = (state) => ({
  index: getIndex(state)
})

const mapDispatchToProps = { setIndex }

export default connect(mapStateToProps, mapDispatchToProps)(Foo)
