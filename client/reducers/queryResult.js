import fetchJsonp from 'fetch-jsonp'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

export const FETCH_QUERY = 'FETCH_QUERY';
export const FETCH_QUERY_FULFILLED = 'FETCH_QUERY_FULFILLED';

export const fetchQuery = term => ({ type: FETCH_QUERY, payload: term });
const fetchQueryFulfilled = payload => {
  console.log(payload)
  return { type: FETCH_QUERY_FULFILLED, payload }
}

export const fetchQueryEpic = action$ => {
  return action$.ofType(FETCH_QUERY)
    .mergeMap(action => {
      return Observable.fromPromise(fetchJsonp(`https://itunes.apple.com/search?term=${action.payload}&media=podcast`))
    })
    .mergeMap(response => {
      return Observable.fromPromise(response.json())
    })
    .map(response => fetchQueryFulfilled(response))
}

const query = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUERY_FULFILLED:
      let results = action.payload.results.map(result => {
        const { feedUrl, artworkUrl600, collectionName, collectionId } = result
        return { feedUrl,
                 arteworkUrl: artworkUrl600,
                 title: collectionName,
                 id: collectionId
               }
      })
      return results
    default:
      return state
  }
}

export default query

