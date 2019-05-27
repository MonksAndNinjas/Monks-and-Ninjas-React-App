export default function validateUser(
  state = {
    loading: false,
    user: ''
  }, action) {
    switch (action.type) {

      case 'VALIDATING_USER':

        return {...state, loading: true};

      case 'VALIDATE_USER':
        return {loading: false, user: action.payload}

      case 'REMOVE_USER':
      console.log(action)
        return {loading: false, user: action.payload}

      default:
        return state;

    }
  };
