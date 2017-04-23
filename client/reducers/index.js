import { combineReducers } from 'redux'
import subscriptions from './subscriptions.js'
import queryResult   from './queryResult.js'
import currentTrack  from './currentTrack.js'

const radiocastStore = combineReducers({
  subscriptions,
  queryResult,
  currentTrack,
})

export default radiocastStore
