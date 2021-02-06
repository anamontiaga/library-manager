import { createContext, useCallback, useMemo, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback(() => setIsAuthenticated(true), [])

  const value = useMemo(() => ({
    login,
    isAuthenticated
  }), [isAuthenticated, login])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}