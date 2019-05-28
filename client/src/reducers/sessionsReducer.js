export default function sessionsReducer(
  state = {
    loading: false,
    user: ''
  }, action) {
    switch (action.type) {

      case 'VALIDATING_USER':
        return {...state, loading: true};

      case 'VALIDATE_USER':
        return {loading: false, user: action.payload}

      case 'LOGGING_IN':
        return {...state, loading: true};

      case 'REMOVE_USER':
        return {loading: false, user: action.payload}

      case 'LOGGING_OUT':
          return {...state, loading: true};

      case 'LOGGED_OUT':
          return {loading: false, status: action.payload.message}

      default:
        return state;

    }
  };
