import React from 'react'
import { ContainerEl, BookImageEl, BookTitleEl } from './style'

export const BookItem = ({ image, title }) => (
  <ContainerEl>
    <BookImageEl src={image} />
    <BookTitleEl>{title}</BookTitleEl>
  </ContainerEl>
)
