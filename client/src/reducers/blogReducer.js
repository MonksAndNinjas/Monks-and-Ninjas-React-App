export default function blogReducer(state = {
  blogPosts: []
}, action) {
  switch (action.type) {

    case 'ADD_BLOG_POST':
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.blogPost]
      }

    case 'DELETE_BLOG_POST':
      console.log(action.blogPost);

    default:
      return state;

  }
};
