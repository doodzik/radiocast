
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import queryResult, {fetchQueryEpic}   from './queryResult.js'
import subscriptions from './subscriptions.js'

const epics = combineEpics(
  fetchQueryEpic
)

const epicMiddleware = createEpicMiddleware(epics)

const radiocastStore = combineReducers({
  queryResult,
  subscriptions
})

export default function configureStore() {
  const store = createStore(
    radiocastStore,
    applyMiddleware(epicMiddleware)
  );


  return store;
}
