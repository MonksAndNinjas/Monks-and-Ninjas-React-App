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
      const posts = state.blogPosts.filter(post => post.id !== action.blogPost.id)

      fetch('api/posts' + '/' + action.blogPost.id, {
        method: "delete",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return { blogPosts: posts }

    default:
      return state;

  }
};
