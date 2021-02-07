import React, { useState } from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { MAGIC_WORD } from '../../constants/magic_word'
import styled from 'styled-components'
import theme from 'styled-theming'
import { SwitchThemeButton } from '../SwitchThemeButton'

const buttonBackground = theme('mode', {
  light: 'green',
  dark: 'blue'
});

const LoginButtonEl = styled.button`
    background: ${buttonBackground};
  `;

export const Home = ({ setThemeMode, themeMode }) => {
  const { login } = useAuthContext()
  const [magicWord, setMagicWord] = useState('')

  const handleInputChange = (e) => {
    setMagicWord(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (magicWord === MAGIC_WORD) {
      login()
    }
  }

  return (
    <div>
      <SwitchThemeButton/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <LoginButtonEl type="submit">Iniciar sesión</LoginButtonEl>
      </form>
    </div>
  )
}
