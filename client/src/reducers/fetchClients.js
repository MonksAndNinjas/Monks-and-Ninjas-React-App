export default function fetchReducer(
  state = {
    loading: false,
    clients: []
  }, action) {
    switch (action.type) {

      case 'LOADING_CLIENTS':

        return {...state, loading: true};

      case 'FETCH_CLIENTS':
        return {loading: false, clients: action.payload}

      default:
        return state;

    }
  };
