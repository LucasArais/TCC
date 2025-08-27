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
    // Simulação de login - em produção seria uma API real
    const mockUser = {
      id: Date.now(),
      email,
      userType, // 'teacher' ou 'student'
      name: userType === 'teacher' ? 'Prof. João Silva' : 'Maria Santos',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      bio: userType === 'teacher' 
        ? 'Professor de Matemática com 10 anos de experiência'
        : 'Estudante de Engenharia, sempre em busca de conhecimento'
    }
    
    localStorage.setItem('profai_user', JSON.stringify(mockUser))
    setUser(mockUser)
    return mockUser
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
