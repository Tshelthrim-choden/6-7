import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchBlog = async (blogId) => {
  const response = await axios.get(`/api/blogs/${blogId}`)
  return response.data
}

const BlogView = () => {
  const { id } = useParams()
  const { data: blog, isLoading } = useQuery(['blog', id], () => fetchBlog(id))

  if (isLoading) return <div>Loading...</div>
  if (!blog) return <div>Blog not found</div>

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>Likes: {blog.likes}</p>
    </div>
  )
}

export default BlogView
