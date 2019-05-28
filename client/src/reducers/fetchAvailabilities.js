export default function fetchReducer(
  state = {
    loading: false,
    availabilities: []
  }, action) {
    switch (action.type) {

      case 'LOADING_AVAILABILITIES':
        return {...state, loading: true};

      case 'FETCH_AVAILABILITES':
        return {loading: false, availabilities: action.payload}

      default:
        return state;

    }
  };
