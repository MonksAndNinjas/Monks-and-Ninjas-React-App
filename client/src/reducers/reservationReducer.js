export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.reservation]
      }

    default:
      return state;

  }
};
