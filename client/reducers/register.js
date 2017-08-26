export default function register (state = [], action) {
  switch (action.type) {
    case 'ADD_WALKER':
      return [...state, action.walker]
    case 'ADD_OWNER':
      return [...state, action.owner]
    default:
      return state
  }
}
