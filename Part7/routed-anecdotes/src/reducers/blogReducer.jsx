const blogReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT_BLOGS':
        return action.data
      case 'ADD_BLOG':
        return state.concat(action.data)
      case 'LIKE_BLOG':
        return state.map(blog =>
          blog.id !== action.data.id ? blog : { ...blog, likes: blog.likes + 1 }
        )
      case 'DELETE_BLOG':
        return state.filter(blog => blog.id !== action.data.id)
      default:
        return state
    }
  }
  
  export const initializeBlogs = (blogs) => {
    return {
      type: 'INIT_BLOGS',
      data: blogs
    }
  }
  
  export const createBlog = (blog) => {
    return {
      type: 'ADD_BLOG',
      data: blog
    }
  }
  
  export const likeBlog = (blog) => {
    return {
      type: 'LIKE_BLOG',
      data: blog
    }
  }
  
  export const deleteBlog = (blog) => {
    return {
      type: 'DELETE_BLOG',
      data: blog
    }
  }
  
  export default blogReducer
  