import React from 'react'
import {
  ContainerEl,
  CloseButtonEl,
  CloseIconEl,
  MessageEl,
  SubMessageEl,
} from './style'
import closeIcon from 'assets/cancel.png'

export const Alert = ({ message, onClose, subMessage }) => (
  <ContainerEl>
    <CloseButtonEl onClick={onClose}>
      <CloseIconEl src={closeIcon} />
    </CloseButtonEl>
    <div>
      <MessageEl>{message}</MessageEl>
      <SubMessageEl>{subMessage}</SubMessageEl>
    </div>
  </ContainerEl>
)
