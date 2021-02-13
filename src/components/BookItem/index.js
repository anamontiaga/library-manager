import React from 'react'
import { ContainerEl, BookImageEl, BookTitleEl } from './style'

export const BookItem = ({ image, title, id }) => (
  <ContainerEl id={id}>
    <BookImageEl src={image} />
    <BookTitleEl>{title}</BookTitleEl>
  </ContainerEl>
)
