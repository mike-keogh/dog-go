export default function receive(state = [], action) {
  console.log('reducer', action.request)
  switch (action.type) {
    case 'RECEIVE_OWNERS':
      return [...action.owner]
    case 'SEND_REQUEST':
      return [...state, action.request]
    default:
      return state
  }
}
