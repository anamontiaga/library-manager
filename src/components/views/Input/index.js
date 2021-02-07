import React from 'react'
import { InputEl } from './style'

export const Input = ({ onChange }) => {
  return <InputEl onChange={onChange} type="password" required pattern="\S+" />
}
