export default function reservationReducer(state = [], action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return [...state, action.reservation]

    case 'DELETE_RESERVATION':
      const reservations = state.filter(reservation => reservation.id !== action.reservation.id);
      console.log(reservations)
      fetch('api/reservations/' + action.reservation.id, {
        method: "delete",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return reservations

    default:
      return state;

  }
};
