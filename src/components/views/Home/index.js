import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { MAGIC_WORD } from '../../constants/magic_word'
import { SwitchThemeButton } from '../SwitchThemeButton'
import { ContainerEl, LoginButtonEl } from './style'

export const Home = () => {
  const { login } = useAuthContext()
  const [magicWord, setMagicWord] = useState('')
  const [initialised, setInitialised] = useState(false)

  const handleInputChange = (e) => {
    setMagicWord(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (magicWord === MAGIC_WORD) {
      login()
    }
  }

  useEffect(() => setInitialised(true))

  const startFormAnimation = useSpring({
    transform: initialised ? 'translateY(0)' : 'translateY(100vh)',
    opacity: initialised ? 1 : 0,
    transition: '2s'
  });


  return (
    <ContainerEl>
      <SwitchThemeButton />
      <animated.div
        style={startFormAnimation}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={magicWord} onChange={handleInputChange} />
          <LoginButtonEl type="submit">Iniciar sesión</LoginButtonEl>
        </form>
      </animated.div>
    </ContainerEl>
  )
}
