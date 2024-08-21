import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const fetchUsers = async () => {
  const response = await axios.get('/api/users')
  return response.data
}

const UsersView = () => {
  const { data: users, isLoading } = useQuery('users', fetchUsers)

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersView
