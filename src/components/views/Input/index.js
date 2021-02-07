import React from 'react'
import { InputEl, InputContainerEl, ViewIconEl } from './style'
import viewIcon from '../../../assets/visibility.png'

export const Input = ({ onChange }) => (
  <InputContainerEl>
    <InputEl onChange={onChange} type="password" required pattern="\S+" />
    <ViewIconEl src={viewIcon} />
  </InputContainerEl>
)
