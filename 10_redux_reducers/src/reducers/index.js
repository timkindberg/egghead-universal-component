import { combineReducers } from 'redux'
import tabs from './tabs'

export default (asyncReducers) => combineReducers({
  tabs,
  ...asyncReducers
})
