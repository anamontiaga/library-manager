import { createContext, useCallback, useMemo, useState } from 'react'

const MY_AUTH_APP = 'MY_AUTH_APP'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP))

  const login = useCallback(() => {
    window.localStorage.setItem(MY_AUTH_APP, true)
    setIsAuthenticated(true)
  }, [])

  const value = useMemo(
    () => ({
      login,
      isAuthenticated,
    }),
    [isAuthenticated, login]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
