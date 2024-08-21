import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/blogs">Blogs</Link>
  </nav>
)

export default Navigation
