import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { X, User, Lock, GraduationCap, BookOpen, Brain, Users, MessageCircle, TrendingUp, Mail, UserPlus, CheckCircle, CreditCard, Check, Instagram, Linkedin, Twitter } from 'lucide-react'
import InfiniteScroll from '../components/InfiniteScroll'
import FeedPost from '../components/FeedPost'
import Stepper, { Step } from '../components/Stepper'

const Home = () => {
  const [showLoginSidebar, setShowLoginSidebar] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const [loading, setLoading] = useState(false)
  
  // Register form states
  const [registerData, setRegisterData] = useState({
    userType: 'student',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    subject: ''
  })
  
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

  const handleRegisterComplete = () => {
    console.log('Cadastro completo:', registerData)
    setShowRegisterModal(false)
    // Aqui você pode implementar a lógica de cadastro
    // Por exemplo, chamar uma API de registro
  }

  const updateRegisterData = (field, value) => {
    setRegisterData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <div className="logo">
            <h1>ProfAI</h1>
          </div>
          <div className="header-buttons">
            <button 
              className="about-button"
              onClick={() => window.location.href = '/about'}
            >
              Quem Somos
            </button>
            <button 
              className="login-button"
              onClick={() => setShowLoginSidebar(true)}
            >
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Conectamos Professores e Alunos e democratizamos o ensino através da Inteligência Artificial</h1>
            <p>
              <strong>Professores:</strong> Compartilhe conteúdo educacional de forma inteligente. Economize tempo e melhore o aprendizado dos seus alunos com nossa plataforma alimentada por IA.
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

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-content">
          <div className="pricing-header">
            <h2>Preço Acessível para Todos</h2>
            <p>Democratizamos o acesso à educação de qualidade</p>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <CreditCard className="pricing-icon" />
              <h3>Plano Estudantil</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">15</span>
                <span className="period">/mês</span>
              </div>
              <p className="price-description">Para alunos de todas as universidades</p>
            </div>
            <div className="pricing-features">
              <div className="feature-item">
                <Check className="check-icon" />
                <span>Acesso completo ao feed educativo</span>
              </div>
              <div className="feature-item">
                <Check className="check-icon" />
                <span>Assistente IA ilimitado</span>
              </div>
              <div className="feature-item">
                <Check className="check-icon" />
                <span>Interação com professores</span>
              </div>
              <div className="feature-item">
                <Check className="check-icon" />
                <span>Análise de progresso personalizada</span>
              </div>
            </div>
            <button 
              className="pricing-cta-button"
              onClick={() => setShowRegisterModal(true)}
            >
              Começar Agora
            </button>
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
                <p>Não tem uma conta? <a href="#register" onClick={(e) => {
                  e.preventDefault()
                  setShowLoginSidebar(false)
                  setShowRegisterModal(true)
                }}>Cadastre-se</a></p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal with Stepper */}
      {showRegisterModal && (
        <div className="sidebar-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="register-modal" onClick={(e) => e.stopPropagation()}>
            <div className="register-modal-header">
              <h2>Bem-vindo ao ProfAI!</h2>
              <button 
                className="close-sidebar"
                onClick={() => setShowRegisterModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <Stepper
              initialStep={1}
              onFinalStepCompleted={handleRegisterComplete}
              backButtonText="Voltar"
              nextButtonText="Continuar"
            >
              <Step>
                <div className="onboarding-step">
                  <div className="step-icon">
                    <UserPlus size={48} />
                  </div>
                  <h3>Bem-vindo à revolução educacional!</h3>
                  <p>O ProfAI conecta professores e alunos através da inteligência artificial, criando uma experiência de aprendizado única e personalizada.</p>
                  <div className="features-preview">
                    <div className="feature-item">
                      <span>IA Educacional</span>
                    </div>
                    <div className="feature-item">
                      <span>Comunidade Ativa</span>
                    </div>
                    <div className="feature-item">
                      <span>Análise de Progresso</span>
                    </div>
                  </div>
                </div>
              </Step>
              
              <Step>
                <div className="onboarding-step">
                  <div className="step-icon">
                    <Users size={48} />
                  </div>
                  <h3>Você é professor ou aluno?</h3>
                  <p>Selecione seu perfil para personalizar sua experiência na plataforma.</p>
                  <div className="user-type-selection">
                    <button
                      type="button"
                      className={`user-type-card ${registerData.userType === 'student' ? 'active' : ''}`}
                      onClick={() => updateRegisterData('userType', 'student')}
                    >
                      <BookOpen size={32} />
                      <h4>Sou Aluno</h4>
                      <p>Quero aprender com professores e usar IA para estudar</p>
                    </button>
                    <button
                      type="button"
                      className={`user-type-card ${registerData.userType === 'teacher' ? 'active' : ''}`}
                      onClick={() => updateRegisterData('userType', 'teacher')}
                    >
                      <GraduationCap size={32} />
                      <h4>Sou Professor</h4>
                      <p>Quero compartilhar conhecimento e acompanhar alunos</p>
                    </button>
                  </div>
                </div>
              </Step>
              
              <Step>
                <div className="onboarding-step">
                  <div className="step-icon">
                    <User size={48} />
                  </div>
                  <h3>Conte-nos sobre você</h3>
                  <p>Precisamos de algumas informações para criar seu perfil.</p>
                  <div className="register-form">
                    <div className="form-group">
                      <label>Nome completo</label>
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        value={registerData.name}
                        onChange={(e) => updateRegisterData('name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={registerData.email}
                        onChange={(e) => updateRegisterData('email', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Instituição</label>
                      <input
                        type="text"
                        placeholder="Nome da sua escola/universidade"
                        value={registerData.institution}
                        onChange={(e) => updateRegisterData('institution', e.target.value)}
                      />
                    </div>
                    {registerData.userType === 'teacher' && (
                      <div className="form-group">
                        <label>Matéria principal</label>
                        <input
                          type="text"
                          placeholder="Ex: Matemática, História, Biologia..."
                          value={registerData.subject}
                          onChange={(e) => updateRegisterData('subject', e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Step>
              
              <Step>
                <div className="onboarding-step">
                  <div className="step-icon">
                    <Lock size={48} />
                  </div>
                  <h3>Crie sua senha</h3>
                  <p>Escolha uma senha segura para proteger sua conta.</p>
                  <div className="register-form">
                    <div className="form-group">
                      <label>Senha</label>
                      <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        value={registerData.password}
                        onChange={(e) => updateRegisterData('password', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirmar senha</label>
                      <input
                        type="password"
                        placeholder="Digite a senha novamente"
                        value={registerData.confirmPassword}
                        onChange={(e) => updateRegisterData('confirmPassword', e.target.value)}
                      />
                    </div>
                    {registerData.password && registerData.confirmPassword && 
                     registerData.password !== registerData.confirmPassword && (
                      <p className="error-message">As senhas não coincidem</p>
                    )}
                  </div>
                </div>
              </Step>
              
              <Step>
                <div className="onboarding-step">
                  <div className="step-icon success">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Tudo pronto!</h3>
                  <p>Sua conta foi criada com sucesso. Agora você pode começar a explorar o ProfAI!</p>
                  <div className="success-summary">
                    <div className="summary-item">
                      <strong>Nome:</strong> {registerData.name}
                    </div>
                    <div className="summary-item">
                      <strong>Perfil:</strong> {registerData.userType === 'teacher' ? 'Professor' : 'Aluno'}
                    </div>
                    <div className="summary-item">
                      <strong>E-mail:</strong> {registerData.email}
                    </div>
                    <div className="summary-item">
                      <strong>Instituição:</strong> {registerData.institution}
                    </div>
                    {registerData.userType === 'teacher' && registerData.subject && (
                      <div className="summary-item">
                        <strong>Matéria:</strong> {registerData.subject}
                      </div>
                    )}
                  </div>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-links">
              <div className="footer-section">
                <h4>Plataforma</h4>
                <ul>
                  <li><a href="#features">Recursos</a></li>
                  <li><a href="#pricing">Preços</a></li>
                  <li><a href="#about">Sobre</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Suporte</h4>
                <ul>
                  <li><a href="#help">Central de Ajuda</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contato</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacidade</a></li>
                  <li><a href="#terms">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
