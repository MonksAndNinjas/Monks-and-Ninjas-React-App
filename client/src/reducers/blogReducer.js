export default function blogReducer(state = [], action) {
  switch (action.type) {

    case 'ADD_BLOG_POST':
      return [...state, action.blogPost]

    case 'DELETE_BLOG_POST':
      const posts = state.filter(post => post.id !== action.blogPost.id)

      fetch('api/posts/' + action.blogPost.id, {
        method: "delete",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return posts

    default:
      return state;

  }
};
