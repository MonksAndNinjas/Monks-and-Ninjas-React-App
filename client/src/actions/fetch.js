export function fetchAvailabilities() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_AVAILABILITIES' });

    return fetch('api/availabilities', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(availabilities => dispatch({ type: 'FETCH_AVAILABILITES', payload: availabilities }))
  }
}

export function fetchServices() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SERVICES' });

    return fetch('api/services', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(services => dispatch({ type: 'FETCH_SERVICES', payload: services }))
  }
}
