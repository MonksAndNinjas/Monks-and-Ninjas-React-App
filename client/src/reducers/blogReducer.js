export default function blogReducer(state = {
  blogPosts: []
}, action) {
  switch (action.type) {

    case 'ADD_BLOG_POST':
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.blogPost]
      }

    default:
      return state;

  }
};
