export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      console.log(action);

    default:
      return state;

  }
};
