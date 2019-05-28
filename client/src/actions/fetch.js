// API calls to retrieve information
export function fetchAvailabilities() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_AVAILABILITIES' });

    return fetch('api/availabilities', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(availabilities => dispatch({ type: 'FETCH_AVAILABILITES', payload: availabilities }))
  }
}

export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(posts => dispatch({ type: 'FETCH_BLOG_POSTS', payload: posts }))
  }
}

export function fetchReservations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESERVATIONS' });

    return fetch('api/reservations', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(reservations => dispatch({ type: 'FETCH_RESERVATIONS', payload: reservations }))
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

export function fetchClients() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CLIENTS' });

    return fetch('api/client_infos', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(clients => dispatch({ type: 'FETCH_CLIENTS', payload: clients }))
  }
}
