import React, { useContext, useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: 'dark',
  })

  const toggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`
    setThemeState({ mode: mode })
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeProvider
