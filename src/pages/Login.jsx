import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { User, Lock, GraduationCap, BookOpen } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await login(email, password, userType)
      navigate('/')
    } catch (error) {
      console.error('Erro no login:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>ProfAI</h1>
          <p>Conectando professores e alunos através da inteligência artificial</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="user-type-selector">
            <button
              type="button"
              className={`user-type-btn ${userType === 'student' ? 'active' : ''}`}
              onClick={() => setUserType('student')}
            >
              <BookOpen size={20} />
              Aluno
            </button>
            <button
              type="button"
              className={`user-type-btn ${userType === 'teacher' ? 'active' : ''}`}
              onClick={() => setUserType('teacher')}
            >
              <GraduationCap size={20} />
              Professor
            </button>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <User size={20} className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="login-footer">
          <p>Não tem uma conta? <a href="#register">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
