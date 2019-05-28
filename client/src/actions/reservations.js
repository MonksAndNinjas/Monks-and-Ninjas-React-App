// handles all reservation actions
export const addReservation = (reservation) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESERVATIONS' });

    return fetch('api/client_infos', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
      }).then(response => response.json())
        .then(reservation => dispatch({ type: 'ADD_RESERVATION', payload: reservation }))
  };
};

export const deleteReservation = (reservation) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESERVATIONS' });

    return fetch('api/reservations/' + reservation.id, {
        method: "delete",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(reserve => dispatch({ type: 'DELETE_RESERVATION', payload: reservation }))
  };
};
