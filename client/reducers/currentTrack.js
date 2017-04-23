const CURRENT_TRACK_TIME = 'CURRENT_TRACK_TIME'

const currentTrack = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_TRACK_TIME:
      return {}
    default:
      return state
  }
}

export default currentTrack


