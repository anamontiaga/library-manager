import React, {useState} from "react"
import {useAuthContext} from '../../../hooks/useAuthContext'
import {MAGIC_WORD} from '../../constants/magic_word'

export const Home = () => {
  const {login} = useAuthContext()
  const [magicWord, setMagicWord] = useState('')

  const handleInputChange = e => {
    setMagicWord(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (magicWord === MAGIC_WORD) {
      login()
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type='text' value={magicWord} onChange={handleInputChange} />
      <button type='submit'>Iniciar sesión</button>
    </form>
  </div>
}
