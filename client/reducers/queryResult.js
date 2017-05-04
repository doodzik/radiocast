import fetchJsonp from 'fetch-jsonp'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { SUBSCRIPTION_ADD, SUBSCRIPTION_REMOVE } from './subscriptions.js'

export const FETCH_QUERY = 'FETCH_QUERY';
export const FETCH_QUERY_FULFILLED = 'FETCH_QUERY_FULFILLED';

export const fetchQuery = term => {
  return { type: FETCH_QUERY, payload: term }
}

const fetchQueryFulfilled = payload => {
  return { type: FETCH_QUERY_FULFILLED, payload: payload }
}

export const fetchQueryEpic = action$ => {
  return action$.ofType(FETCH_QUERY)
    .mergeMap(action => {
      return Observable.fromPromise(Promise.all([fetchJsonp(`https://itunes.apple.com/search?term=${action.payload.term}&media=podcast`), action.payload.subs]))
    })
    .mergeMap(response => {
      return Observable.fromPromise(Promise.all([response[0].json(), response[1]]))
    })
    .map(response => {
      return fetchQueryFulfilled(response)
    })
}

const query = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUERY_FULFILLED:
      let results = action.payload[0].results.map(result => {
        const { feedUrl, artworkUrl600, collectionName, collectionId } = result
        const subs = action.payload[1]
        const subscribed = ( subs.length !== 0) ? subs.every(val => result.id == val.id) : false
        return {
                 feedUrl,
                 arteworkUrl: artworkUrl600,
                 title: collectionName,
                 id: collectionId,
                 subscribed
               }
      })
      return results
    case SUBSCRIPTION_ADD:
      return state.map(val => {
        if (action.payload.id == val.id) {
          val.subscribed = true
        }
        return val
      })
    case SUBSCRIPTION_REMOVE:
      return state.map(val => {
        if (action.payload.id == val.id) {
          val.subscribed = false
        }
        return val
      })
    default:
      return state
  }
}

export default query

