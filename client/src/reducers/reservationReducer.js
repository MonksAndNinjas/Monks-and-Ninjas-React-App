export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.reservation]
      }

    case 'DELETE_RESERVATION':
      const reservations = state.reservations.filter(reservation => reservation.id !== action.reservation.id);
      
      fetch('api/reservations/' + action.reservation.id, {
        method: "delete",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return { reservations: reservations }

    default:
      return state;

  }
};
