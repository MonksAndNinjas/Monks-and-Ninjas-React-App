export default function reservationReducer(state = {
  reservations: []
}, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      console.log(action);

      fetch('api/reservations', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })

      this.props.onSubmit(this.state);

    default:
      return state;

  }
};
