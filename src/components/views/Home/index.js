import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { MAGIC_WORD } from '../../constants/magic_word'
import {Header} from '../Header'
import { Input } from '../Input'
import { MainButton } from '../MainButton'
import { ContainerEl, FormEl, FormContainerEl } from './style'

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
    transition: '1s',
  })

  return (
    <ContainerEl>
      <Header />
      <animated.div style={startFormAnimation}>
        <FormContainerEl>
          <FormEl onSubmit={handleSubmit}>
            <Input value={magicWord} onChange={handleInputChange} />
            <MainButton alt="Iniciar sesión" label="Iniciar sesión" />
          </FormEl>
        </FormContainerEl>
      </animated.div>
    </ContainerEl>
  )
}
