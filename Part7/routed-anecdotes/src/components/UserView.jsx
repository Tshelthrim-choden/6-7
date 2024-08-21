import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUser = async (userId) => {
  const response = await axios.get(`/api/users/${userId}`)
  return response.data
}

const UserView = () => {
  const { id } = useParams()
  const { data: user, isLoading } = useQuery(['user', id], () => fetchUser(id))

  if (isLoading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Blogs created</h3>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserView
