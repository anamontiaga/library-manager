import React, { useState } from 'react'
import { InputEl, InputContainerEl, HandleViewButtonEl, ViewIconEl } from './style'
import viewIcon from '../../../assets/visibility.png'

export const Input = ({ onChange }) => {
  const [hidePassword, setHidePassword] = useState(true)
  const handlePassword = () => setHidePassword(!hidePassword)

  return (
    <InputContainerEl>
      <InputEl
        onChange={onChange}
        type={hidePassword ? 'password' : 'text'}
        required
        pattern="\S+"
      />
      <HandleViewButtonEl onClick={handlePassword}>
        <ViewIconEl src={viewIcon} />
      </HandleViewButtonEl>
    </InputContainerEl>
  )
}
