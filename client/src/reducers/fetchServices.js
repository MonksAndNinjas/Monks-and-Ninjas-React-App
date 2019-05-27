export default function fetchServices(
  state = {
    loading: false,
    services: []
  }, action) {
    switch (action.type) {

      case 'LOADING_SERVICES':

        return {...state, loading: true};

      case 'FETCH_SERVICES':
        return {loading: false, services: action.payload}

      default:
        return state;

    }
  };
