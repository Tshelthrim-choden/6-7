import { useState, useEffect } from 'react'
import axios from 'axios'

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('/api/blogs')
      setBlogs(response.data)
    }

    fetchBlogs()
  }, [])

  const createBlog = async (newBlog) => {
    const response = await axios.post('/api/blogs', newBlog)
    setBlogs(blogs.concat(response.data))
  }

  return [blogs, { createBlog }]
}
