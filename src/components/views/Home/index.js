import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { MAGIC_WORD } from '../../constants/magic_word'
import { Alert } from '../Alert'
import { Header } from '../Header'
import { Input } from '../Input'
import { MainButton } from '../MainButton'
import { ContainerEl, FormEl, FormContainerEl } from './style'

export const Home = () => {
  const { login } = useAuthContext()
  const [magicWord, setMagicWord] = useState('')
  const [initialised, setInitialised] = useState(false)
  const [alert, setAlert] = useState(false)

  console.log({ alert })

  const handleInputChange = (e) => {
    setMagicWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (magicWord === MAGIC_WORD) {
      login()
    }
    setAlert(true)
  }

  useEffect(() => setInitialised(true))

  const startFormAnimation = useSpring({
    transform: initialised ? 'translateY(0)' : 'translateY(100vh)',
    transition: '0.8s',
  })

  const openAlertAnimation = useSpring({
    opacity: alert ? '1' : '0',
    transition: '0.4s',
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
      {alert && (

        <div style={{ marginTop: 'auto' }}>
          <animated.div style={openAlertAnimation}>
            <Alert
              message='Ouccch, la contraseña no es correcta'
              subMessage='Vuelve a intentarlo!'
              onClose={() => setAlert(false)} />
          </animated.div>
        </div>

      )}
    </ContainerEl>
  )
}
