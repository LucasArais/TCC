import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Heart, MessageCircle, Share2, Bot, User, Calendar } from 'lucide-react'

const Feed = () => {
  const { user, isStudent } = useAuth()
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [aiHelp, setAiHelp] = useState('')

  useEffect(() => {
    // Mock data para posts
    const mockPosts = [
      {
        id: 1,
        teacher: {
          name: 'Prof. Ana Costa',
          subject: 'Matemática',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana'
        },
        content: 'Hoje vamos estudar equações do segundo grau! 📊\n\nLembrem-se: ax² + bx + c = 0\n\nA fórmula de Bhaskara é nossa aliada: x = (-b ± √(b²-4ac)) / 2a',
        subject: 'Matemática',
        timestamp: '2 horas atrás',
        likes: 24,
        comments: 8,
        image: null
      },
      {
        id: 2,
        teacher: {
          name: 'Prof. Carlos Silva',
          subject: 'História',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos'
        },
        content: 'A Revolução Industrial mudou completamente a sociedade! 🏭\n\nPontos importantes:\n• Início na Inglaterra (séc. XVIII)\n• Máquina a vapor\n• Êxodo rural\n• Surgimento da classe operária',
        subject: 'História',
        timestamp: '4 horas atrás',
        likes: 31,
        comments: 12,
        image: null
      },
      {
        id: 3,
        teacher: {
          name: 'Prof. Maria Santos',
          subject: 'Biologia',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria'
        },
        content: 'Fotossíntese: o processo que sustenta a vida na Terra! 🌱\n\n6CO₂ + 6H₂O + luz solar → C₆H₁₂O₆ + 6O₂\n\nAs plantas convertem luz em energia química. Incrível, não?',
        subject: 'Biologia',
        timestamp: '1 dia atrás',
        likes: 45,
        comments: 15,
        image: null
      }
    ]
    setPosts(mockPosts)
  }, [])

  const handleAiHelp = async (post) => {
    setSelectedPost(post)
    setAiHelp('Analisando o conteúdo...')
    
    // Simular resposta da IA
    setTimeout(() => {
      const aiResponses = {
        1: 'Vou te ajudar com equações do segundo grau! 🤖\n\nPara resolver ax² + bx + c = 0:\n1. Identifique os coeficientes a, b e c\n2. Calcule o discriminante: Δ = b² - 4ac\n3. Se Δ ≥ 0, use Bhaskara: x = (-b ± √Δ) / 2a\n\nQuer praticar com um exemplo?',
        2: 'A Revolução Industrial é fascinante! 🏭\n\nPara estudar melhor:\n• Foque nas causas: acúmulo de capital, recursos naturais\n• Consequências sociais: urbanização, condições de trabalho\n• Tecnologias: máquina a vapor, teares mecânicos\n\nPosso criar um cronograma de estudos personalizado para você!',
        3: 'Fotossíntese é fundamental! 🌱\n\nPara memorizar:\n• Fase clara: nos tilacoides, produz ATP e NADPH\n• Fase escura: no estroma, fixa CO₂ (Ciclo de Calvin)\n• Resultado: glicose + oxigênio\n\nVamos fazer exercícios práticos?'
      }
      setAiHelp(aiResponses[post.id] || 'Posso te ajudar a entender melhor este conteúdo! Como prefere estudar?')
    }, 1500)
  }

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2>Feed de Conteúdos</h2>
        <p>Descubra novos conhecimentos compartilhados pelos professores</p>
      </div>

      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.teacher.avatar} alt={post.teacher.name} className="teacher-avatar" />
              <div className="post-info">
                <h3>{post.teacher.name}</h3>
                <span className="subject-tag">{post.subject}</span>
                <div className="post-meta">
                  <Calendar size={14} />
                  <span>{post.timestamp}</span>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p>{post.content}</p>
            </div>

            <div className="post-actions">
              <button className="action-btn">
                <Heart size={18} />
                <span>{post.likes}</span>
              </button>
              <button className="action-btn">
                <MessageCircle size={18} />
                <span>{post.comments}</span>
              </button>
              <button className="action-btn">
                <Share2 size={18} />
              </button>
              {isStudent && (
                <button 
                  className="ai-help-btn"
                  onClick={() => handleAiHelp(post)}
                >
                  <Bot size={18} />
                  <span>Pedir Ajuda da IA</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedPost && aiHelp && (
        <div className="ai-help-modal">
          <div className="ai-help-content">
            <div className="ai-help-header">
              <Bot size={24} />
              <h3>Assistente IA - {selectedPost.subject}</h3>
              <button 
                className="close-btn"
                onClick={() => {setSelectedPost(null); setAiHelp('')}}
              >
                ×
              </button>
            </div>
            <div className="ai-response">
              <p>{aiHelp}</p>
            </div>
            <div className="ai-actions">
              <button className="ai-action-btn">Mais Exercícios</button>
              <button className="ai-action-btn">Explicar Melhor</button>
              <button className="ai-action-btn">Criar Resumo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed
