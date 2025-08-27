import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { X, User, Lock, GraduationCap, BookOpen, Brain, Users, MessageCircle, TrendingUp } from 'lucide-react'
import InfiniteScroll from '../components/InfiniteScroll'
import FeedPost from '../components/FeedPost'

const Home = () => {
  const [showLoginSidebar, setShowLoginSidebar] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  // Mock data para o feed infinito
  const mockPosts = [
    {
      id: 1,
      teacher: {
        name: 'Prof. Ana Costa',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana'
      },
      subject: 'Matemática',
      content: 'Hoje vamos estudar equações do segundo grau! 📊\n\nLembrem-se: ax² + bx + c = 0',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      teacher: {
        name: 'Prof. Carlos Silva',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos'
      },
      subject: 'História',
      content: 'A Revolução Industrial mudou completamente a sociedade! 🏭\n\nPontos importantes:\n• Início na Inglaterra (séc. XVIII)',
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      teacher: {
        name: 'Prof. Maria Santos',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria'
      },
      subject: 'Biologia',
      content: 'Fotossíntese: o processo que sustenta a vida na Terra! 🌱\n\n6CO₂ + 6H₂O + luz solar → C₆H₁₂O₆ + 6O₂',
      likes: 45,
      comments: 15
    },
    {
      id: 4,
      teacher: {
        name: 'Prof. João Oliveira',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao'
      },
      subject: 'Física',
      content: 'Lei de Newton: F = m × a 🚀\n\nA força é diretamente proporcional à massa e à aceleração!',
      likes: 18,
      comments: 6
    },
    {
      id: 5,
      teacher: {
        name: 'Prof. Lucia Ferreira',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lucia'
      },
      subject: 'Química',
      content: 'Tabela Periódica: organização dos elementos químicos ⚗️\n\nCada elemento tem propriedades únicas!',
      likes: 22,
      comments: 9
    },
    {
      id: 6,
      teacher: {
        name: 'Prof. Roberto Lima',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=roberto'
      },
      subject: 'Geografia',
      content: 'Placas tectônicas em movimento! 🌍\n\nA Terra está sempre se transformando.',
      likes: 16,
      comments: 4
    }
  ]

  const feedItems = mockPosts.map(post => ({
    content: <FeedPost post={post} />
  }))

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await login(email, password, userType)
      navigate('/feed')
      setShowLoginSidebar(false)
    } catch (error) {
      console.error('Erro no login:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <div className="logo">
            <h1>ProfAI</h1>
          </div>
          <button 
            className="login-button"
            onClick={() => setShowLoginSidebar(true)}
          >
            Entrar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Conecte Professores e Alunos através da Inteligência Artificial</h1>
            <p>
              Crie, agende e compartilhe conteúdo educacional de forma inteligente. 
              Economize tempo e melhore o aprendizado com nossa plataforma alimentada por IA.
            </p>
            <div className="hero-buttons">
              <button 
                className="cta-button"
                onClick={() => setShowLoginSidebar(true)}
              >
                Começar Agora
              </button>
              <button className="demo-button">Ver Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div style={{height: '500px', position: 'relative'}}>
              <InfiniteScroll
                items={feedItems}
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={0.5}
                autoplayDirection="down"
                pauseOnHover={true}
                width="25rem"
                itemMinHeight={180}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <div className="feature-card">
            <Brain className="feature-icon" />
            <h3>Assistente IA Inteligente</h3>
            <p>Alunos podem pedir ajuda da IA para entender melhor qualquer conteúdo postado pelos professores</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Feed Social Educativo</h3>
            <p>Professores compartilham conteúdos e alunos interagem de forma colaborativa e engajada</p>
          </div>
          <div className="feature-card">
            <TrendingUp className="feature-icon" />
            <h3>Análise de Desempenho</h3>
            <p>Acompanhe o progresso dos alunos e otimize sua estratégia de ensino com dados inteligentes</p>
          </div>
        </div>
      </section>

      {/* Login Sidebar */}
      {showLoginSidebar && (
        <div className="sidebar-overlay" onClick={() => setShowLoginSidebar(false)}>
          <div className="login-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <h2>Entrar no ProfAI</h2>
              <p>Faça login para acessar sua conta</p>
              <button 
                className="close-sidebar"
                onClick={() => setShowLoginSidebar(false)}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleLogin} className="sidebar-form">
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
                <label>E-mail</label>
                <div className="input-wrapper">
                  <User size={20} className="input-icon" />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Senha</label>
                <div className="input-wrapper">
                  <Lock size={20} className="input-icon" />
                  <input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </button>

              <div className="sidebar-footer">
                <p>Não tem uma conta? <a href="#register">Cadastre-se</a></p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
