// handles all login, logout and validations actions
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
