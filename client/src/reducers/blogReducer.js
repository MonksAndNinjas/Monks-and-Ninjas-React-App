export default function blogReducer(
  state = {
    loading: false,
    posts: []
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        return {...state, loading: true};

      case 'FETCH_BLOG_POSTS':
        return {loading: false, posts: action.payload}

      case 'ADD_BLOG_POST':
        return {loading: false, posts: [...state.posts, action.payload] }

      case 'DELETE_BLOG_POST':
        const posts = state.posts.filter(post => post.id !== action.payload.id)

        return {loading: false, posts: posts }

      default:
        return state;
  }
};
