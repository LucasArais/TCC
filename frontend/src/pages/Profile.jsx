import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { user, logout } = useAuth()
  const [profileData, setProfileData] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    const fetchProfile = async () => {
      setLoading(true)
      const token = localStorage.getItem('profai_token')
      const res = await fetch(`http://localhost:8080/alunos/email/${encodeURIComponent(user.email)}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setProfileData(data)
        setForm({
          nome: data.nome,
          email: data.email,
          idade: data.idade,
          instituicao: data.instituicao,
          cpf: data.cpf,
          senha: ''
        })
      }
      setLoading(false)
    }
    fetchProfile()
  }, [user, navigate])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleEdit = async e => {
    e.preventDefault()
    const token = localStorage.getItem('profai_token')
    const res = await fetch(`http://localhost:8080/alunos/${profileData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        ...form,
        senha: form.senha ? form.senha : profileData.senha
      })
    })
    if (res.ok) {
      alert('Dados atualizados!')
      setEditMode(false)
      const updated = await res.json()
      setProfileData(updated)
    } else {
      alert('Erro ao atualizar dados')
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja deletar sua conta?')) return
    const token = localStorage.getItem('profai_token')
    const res = await fetch(`http://localhost:8080/alunos/${profileData.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (res.ok) {
      logout()
      navigate('/')
    } else {
      alert('Erro ao deletar conta')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (loading) return <div className="loading">Carregando perfil...</div>
  if (!profileData) return <div>Usuário não encontrado</div>

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profileData.email}`}
          alt={profileData.nome}
          className="profile-avatar"
        />
        <div className="profile-details">
          <h1>{profileData.nome}</h1>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Instituição:</strong> {profileData.instituicao}</p>
          <p><strong>Idade:</strong> {profileData.idade}</p>
          <p><strong>CPF:</strong> {profileData.cpf}</p>
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        {editMode ? (
          <form onSubmit={handleEdit} className="edit-profile-form" style={{
            maxWidth: 400,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>Nome</label>
              <input name="nome" value={form.nome} onChange={handleChange} style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>Email</label>
              <input name="email" value={form.email} onChange={handleChange} style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>Instituição</label>
              <input name="instituicao" value={form.instituicao} onChange={handleChange} style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>Idade</label>
              <input name="idade" type="number" value={form.idade} onChange={handleChange} style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>CPF</label>
              <input name="cpf" value={form.cpf} onChange={handleChange} style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontWeight: 500, marginBottom: 2 }}>Nova senha</label>
              <input name="senha" type="password" value={form.senha} onChange={handleChange} placeholder="Deixe em branco para não alterar" style={{
                padding: 10, borderRadius: 8, border: '1.5px solid #e2e8f0', fontSize: 16
              }} />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer'
              }}>Salvar</button>
              <button type="button" onClick={() => setEditMode(false)} style={{
                background: 'linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)',
                color: '#333', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer'
              }}>Cancelar</button>
            </div>
          </form>
        ) : (
          <>
            <button onClick={() => setEditMode(true)}>Editar Perfil</button>
            <button onClick={handleDelete} style={{ marginLeft: 16, color: 'red' }}>Deletar Conta</button>
            <button onClick={handleLogout} style={{ marginLeft: 16 }}>Sair</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
