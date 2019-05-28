export const addBlogPost = (blogPost) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogPost)
      }).then(response => response.json())
        .then(post => dispatch({ type: 'ADD_BLOG_POST', payload: post }))
  };
};

export const deleteBlogPost = (blogPost) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return  fetch('api/posts/' + blogPost.id, {
      method: "delete",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(post => dispatch({ type: 'DELETE_BLOG_POST', payload: blogPost }))
  };
};
