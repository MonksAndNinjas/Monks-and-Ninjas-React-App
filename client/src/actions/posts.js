export const addBlogPost = (blogPost) => {
  return {
    type: 'ADD_BLOG_POST',
    blogPost
  };
};

export const editBlogPost = (blogPost) => {
  return {
    type: 'EDIT_BLOG_POST',
    blogPost
  };
};

export const deleteBlogPost = (blogPost) => {
  return {
    type: 'DELETE_BLOG_POST',
    blogPost
  };
};
