import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import UsersView from './components/UsersView'
import UserView from './components/UserView'
import BlogView from './components/BlogView'
import Notification from './components/Notification'
import { useBlogs } from './hooks/useResource'

const App = () => {
  const [blogs, blogService] = useBlogs()

  return (
    <div>
      <Notification />
      <Navigation />
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/users/:id" element={<UserView />} />
        <Route path="/blogs/:id" element={<BlogView />} />
      </Routes>
    </div>
  )
}

export default App
