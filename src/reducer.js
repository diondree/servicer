export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_SERVICE':
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.services.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        services: [...state.services, action.payload]
      };
    default:
      return state;
  }
}
