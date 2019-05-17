export const addReservation = (reservation) => {
  return {
    type: 'ADD_RESERVATION',
    reservation
  };
};

export const deleteReservation = (reservation) => {
  return {
    type: 'DELETE_RESERVATION',
    reservation
  };
};
