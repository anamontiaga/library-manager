import React from 'react'
import { Header } from 'components/Header'
import { BookDetailViewEl, BookImageEl, BookTitleEl, CardEl } from './style'

export const BookDetail = ({ match, location }) => {
 const { params: { id } } = match
 const { query: {title, image} } = location

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
