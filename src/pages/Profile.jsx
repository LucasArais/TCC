import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useParams } from 'react-router-dom'
import { User, BookOpen, Calendar, Heart, MessageCircle } from 'lucide-react'

const Profile = () => {
  const { user } = useAuth()
  const { teacherId } = useParams()
  const [profileData, setProfileData] = useState(null)
  const [teacherPosts, setTeacherPosts] = useState([])

  useEffect(() => {
    // Mock data para perfil do professor
    const mockProfile = {
      id: teacherId || user?.id,
      name: 'Prof. Ana Costa',
      subject: 'Matemática',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana',
      bio: 'Professora de Matemática há 15 anos. Apaixonada por ensinar e tornar a matemática acessível para todos os alunos.',
      education: 'Mestrado em Matemática - USP',
      experience: '15 anos de experiência',
      followers: 1247,
      posts: 89,
      likes: 3421
    }

    const mockPosts = [
      {
        id: 1,
        content: 'Hoje vamos estudar equações do segundo grau! 📊\n\nLembrem-se: ax² + bx + c = 0\n\nA fórmula de Bhaskara é nossa aliada: x = (-b ± √(b²-4ac)) / 2a',
        timestamp: '2 horas atrás',
        likes: 24,
        comments: 8,
        subject: 'Matemática'
      },
      {
        id: 4,
        content: 'Dica importante sobre frações! 🧮\n\nPara somar frações com denominadores diferentes:\n1. Encontre o MMC dos denominadores\n2. Transforme as frações\n3. Some os numeradores\n\nExemplo: 1/2 + 1/3 = 3/6 + 2/6 = 5/6',
        timestamp: '1 dia atrás',
        likes: 18,
        comments: 5,
        subject: 'Matemática'
      },
      {
        id: 5,
        content: 'Geometria pode ser divertida! 📐\n\nÁrea do triângulo: A = (base × altura) / 2\nÁrea do círculo: A = π × r²\nÁrea do retângulo: A = base × altura\n\nVamos praticar com exercícios!',
        timestamp: '3 dias atrás',
        likes: 32,
        comments: 12,
        subject: 'Matemática'
      }
    ]

    setProfileData(mockProfile)
    setTeacherPosts(mockPosts)
  }, [teacherId, user])

  if (!profileData) {
    return <div className="loading">Carregando perfil...</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src={profileData.avatar} alt={profileData.name} className="profile-avatar" />
          <div className="profile-details">
            <h1>{profileData.name}</h1>
            <p className="profile-subject">{profileData.subject}</p>
            <p className="profile-bio">{profileData.bio}</p>
            <div className="profile-credentials">
              <p><strong>Formação:</strong> {profileData.education}</p>
              <p><strong>Experiência:</strong> {profileData.experience}</p>
            </div>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{profileData.followers}</span>
            <span className="stat-label">Seguidores</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{profileData.posts}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{profileData.likes}</span>
            <span className="stat-label">Curtidas</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <h2>Conteúdos Publicados</h2>
        <div className="teacher-posts">
          {teacherPosts.map(post => (
            <div key={post.id} className="teacher-post-card">
              <div className="post-header">
                <div className="post-meta">
                  <Calendar size={14} />
                  <span>{post.timestamp}</span>
                  <span className="subject-tag">{post.subject}</span>
                </div>
              </div>
              
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              
              <div className="post-stats">
                <div className="stat">
                  <Heart size={16} />
                  <span>{post.likes}</span>
                </div>
                <div className="stat">
                  <MessageCircle size={16} />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
