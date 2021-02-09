import React from 'react'
import { Header } from 'components/views/Header'
import { BookDetailViewEl, BookImageEl, BookTitleEl, CardEl } from './style'

export const BookDetail = ({ location }) => {
  const {
    query: { title, image, id, categories },
  } = location
  return (
    <>
      <Header isPrivate />
      <BookDetailViewEl>
        <CardEl>
          <BookTitleEl>{title}</BookTitleEl>
          <BookImageEl src={image} />
        </CardEl>
      </BookDetailViewEl>
    </>
  )
}
