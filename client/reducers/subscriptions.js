export const SUBSCRIPTION_ADD = 'SUBSCRIPTION_ADD'
export const SUBSCRIPTION_REMOVE = 'SUBSCRIPTION_REMOVE'
export const addSubscription = term => ({ type: SUBSCRIPTION_ADD, payload: term });
export const removeSubscription = term => ({ type: SUBSCRIPTION_REMOVE, payload: term });

const subscriptions = (state = [], action) => {
  switch (action.type) {
    case SUBSCRIPTION_ADD:
      let sub = action.payload
      sub.subscribed = true
      state.push(sub)
      return state
    case SUBSCRIPTION_REMOVE:
      let sub1 = action.payload
      sub1.subscribed = false
      return state.filter(obj => obj.id !== sub1.id)
    default:
      return state
  }
}

export default subscriptions
