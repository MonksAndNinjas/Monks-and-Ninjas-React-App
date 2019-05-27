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

export function fetchClients() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CLIENTS' });

    return fetch('api/client_infos', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(clients => dispatch({ type: 'FETCH_CLIENTS', payload: clients }))
  }
}

export function validateUser() {
  return (dispatch) => {
    dispatch({ type: 'VALIDATING_USER' });

    return fetch('api/users', {
        accept: 'application/json',
      }).then(response => response.json())
        .then(user => dispatch({ type: 'VALIDATE_USER', payload: user }))
  }
}

export function logOut(user) {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_OUT' });

    return fetch('api/users/' + user, {
        method: "delete",
        headers: {
        'Content-Type': 'application/json'
      },
      }).then(response => response.json())
        .then(user => dispatch({ type: 'LOGGED_OUT', payload: user }))
        .then(user => dispatch({ type: 'REMOVE_USER', payload: '' }))
  }
}

export function logIn(userInput) {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' });

    return fetch('api/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
      }).then(response => response.json())
        .then(user => dispatch({ type: 'VALIDATE_USER', payload: user }))
  }
}
