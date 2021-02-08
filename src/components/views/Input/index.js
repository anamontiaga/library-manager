import React, { useState } from 'react'
import { InputEl, InputContainerEl, HandleViewButtonEl, ViewIconEl } from './style'
import {crossViewIcon, viewIcon } from '../../../assets/icons'

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
        <ViewIconEl>{hidePassword ? crossViewIcon : viewIcon}</ViewIconEl>
      </HandleViewButtonEl>
    </InputContainerEl>
  )
}
