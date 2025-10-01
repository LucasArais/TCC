import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut, User, Home, Search, Users } from 'lucide-react'

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!isAuthenticated) return null

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>ProfAI</h1>
        </Link>

        <nav className="header-nav">
          <Link to="/feed" className="nav-link">
            <Home size={20} />
            <span>Feed</span>
          </Link>
          <Link to="/search" className="nav-link">
            <Search size={20} />
            <span>Buscar</span>
          </Link>
          <Link to="/about" className="nav-link">
            <Users size={20} />
            <span>Quem Somos</span>
          </Link>
        </nav>

        <div className="header-user">
          <Link to="/profile" className="user-info">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <span>{user.name}</span>
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
