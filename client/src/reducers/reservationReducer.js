export default function reservationReducer(
  state = {
    loading: false,
    reservations: []
  }, action) {
    switch (action.type) {

      case 'LOADING_RESERVATIONS':
        return {...state, loading: true};

      case 'FETCH_RESERVATIONS':
        return {loading: false, reservations: action.payload};

      case 'ADD_RESERVATION':
        return {loading: false, reservations: [...state.reservations, action.payload.reservation]}

      case 'DELETE_RESERVATION':
        const reservations = state.reservations.filter(reservation => reservation.id !== action.payload.id);

        return {loading: false, reservations: reservations }

      default:
        return state;

  }
};
