import { FETCH_QUERY } from '../reducers/queryResult.js'

export const searchSubscriptions = (text) => {
  return {
    type: FETCH_QUERY,
    payload: text
  }
}

