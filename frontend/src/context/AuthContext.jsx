import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular verificação de usuário logado
    const savedUser = localStorage.getItem('profai_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password, userType) => {
    // Autenticação real com backend
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha: password })
    });

    if (!response.ok) {
      throw new Error('Email ou senha incorretos');
    }

    const token = await response.text();
    localStorage.setItem('profai_token', token);

    // Decodificar JWT para obter o email
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userEmail = payload.sub || payload.email || email;

    // Buscar dados do usuário no backend
    const userRes = await fetch(`http://localhost:8080/alunos/email/${encodeURIComponent(userEmail)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!userRes.ok) {
      throw new Error('Usuário não encontrado');
    }

    const userData = await userRes.json();
    const userObj = {
      id: userData.id,
      email: userData.email,
      userType,
      name: userData.nome,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
      bio: userType === 'teacher'
        ? 'Professor de Matemática com 10 anos de experiência'
        : 'Estudante de Engenharia, sempre em busca de conhecimento'
    };

    localStorage.setItem('profai_user', JSON.stringify(userObj));
    setUser(userObj);
    return userObj;
  }

  const logout = () => {
    localStorage.removeItem('profai_user')
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isTeacher: user?.userType === 'teacher',
    isStudent: user?.userType === 'student'
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
