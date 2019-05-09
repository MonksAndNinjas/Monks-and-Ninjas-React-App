export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      fetch('api/reservations', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.reservation)
      })

      return {
        ...state,
        reservations: [...state.reservations, action.reservation]
      }

    default:
      return state;

  }
};
