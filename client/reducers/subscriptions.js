const SUBSCRIPTION_ADD = 'SUBSCRIPTION_ADD'

const subscriptions = (state = [], action) => {
  switch (action.type) {
    case SUBSCRIPTION_ADD:
      return [
        ...state
      ]
    default:
      return state
  }
}

export default subscriptions
