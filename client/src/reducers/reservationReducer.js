export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {
//move out of here fetch does not belong here
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.reservation]
      }

    default:
      return state;

  }
};
