const FETCH_QUERY = 'FETCH_QUERY';
const FETCH_QUERY_FULFILLED = 'FETCH_QUERY_FULFILLED';

const fetchQuery = term => ({ type: FETCH_QUERY, payload: term });
const fetchQueryFulfilled = payload => ({ type: FETCH_QUERY_FULFILLED, payload });

const fetchQueryEpic = action$ => {
  return action$.ofType(FETCH_QUERY)
    .mergeMap(action => {
      return Observable.fromPromise(fetchJsonp(`https://itunes.apple.com/search?term=${action.payload}&media=podcast`))
      .map(response => fetchQueryFulfilled(response))
    })
}

const query = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUERY_FULFILLED:
      return action.payload.results
    default:
      return state
  }
}

export default query

