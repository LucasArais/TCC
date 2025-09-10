import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { User, Lock, GraduationCap, BookOpen } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)
  const [forgotMessage, setForgotMessage] = useState('')
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
              <button
                type="button"
                className="forgot-password-btn"
                onClick={() => setShowForgotPassword(true)}
              >
                Esqueci minha senha
              </button>
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
    {/* Modal de recuperação de senha */}
    {showForgotPassword && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            minWidth: '320px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
            position: 'relative'
          }}
        >
          <button
            onClick={() => {
              setShowForgotPassword(false)
              setForgotEmail('')
              setForgotMessage('')
            }}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'none',
              border: 'none',
              fontSize: '1.2em',
              cursor: 'pointer'
            }}
            aria-label="Fechar"
          >
            ×
          </button>
          <h2>Recuperar senha</h2>
          <p>Informe seu e-mail cadastrado para receber as instruções de recuperação.</p>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={forgotEmail}
            onChange={e => setForgotEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              margin: '0.5rem 0 1rem 0',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
          <button
            onClick={async () => {
              setForgotLoading(true)
              setForgotMessage('')
              try {
                const res = await fetch('/auth/forgot-password', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: forgotEmail })
                })
                if (res.ok) {
                  setForgotMessage('Se o e-mail estiver cadastrado, você receberá as instruções em instantes.')
                } else {
                  setForgotMessage('Erro ao solicitar recuperação. Tente novamente.')
                }
              } catch (err) {
                setForgotMessage('Erro ao conectar ao servidor.')
              } finally {
                setForgotLoading(false)
              }
            }}
            disabled={forgotLoading || !forgotEmail}
            style={{
              width: '100%',
              padding: '0.6rem',
              background: '#6c63ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: forgotLoading || !forgotEmail ? 'not-allowed' : 'pointer',
              fontWeight: 600
            }}
          >
            {forgotLoading ? 'Enviando...' : 'Enviar'}
          </button>
          {forgotMessage && (
            <div style={{ marginTop: '1rem', color: forgotMessage.startsWith('Se o e-mail') ? 'green' : 'red' }}>
              {forgotMessage}
            </div>
          )}
        </div>
      </div>
    )}
    </div>
  )
}

export default Login
