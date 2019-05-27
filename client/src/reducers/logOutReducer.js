export default function logOutReducer(
  state = {
    loading: false,
    status: ''
  }, action) {
    switch (action.type) {

      case 'LOGGING_OUT':

        return {...state, loading: true};

      case 'LOGGED_OUT':
        return {loading: false, status: action.payload.message}

      default:
        return state;

    }
  };
