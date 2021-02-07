import React, { useState } from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { MAGIC_WORD } from '../../constants/magic_word'
import { SwitchThemeButton } from '../SwitchThemeButton'
import { ContainerEl, LoginButtonEl } from './style'

export const Home = () => {
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
    <ContainerEl>
      <SwitchThemeButton />
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <LoginButtonEl type="submit">Iniciar sesión</LoginButtonEl>
      </form>
    </ContainerEl>
  )
}
