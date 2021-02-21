import React from 'react'
import { ContainerEl, LabelEl } from './style'

export const Tag = ({ label, type }) => (
  <ContainerEl type={type}>
    <LabelEl type={type}>{label}</LabelEl>
  </ContainerEl>
)
