import React from 'react'
import { Header } from 'components/Header'
import { SecondaryButton } from 'components/SecondaryButton'
import { BookDetailViewEl, BookImageEl, BookTitleEl, CardEl, LinkEl } from './style'

export const BookDetail = ({ location }) => {
  const {
    query: { title, id, image },
  } = location

  return (
    <>
      <Header isPrivate />
      <BookDetailViewEl>
        <CardEl>
          <div>
            <BookTitleEl>{title}</BookTitleEl>
            <BookImageEl src={image} />
          </div>
          <LinkEl
            to={{
              pathname: `/books/:${id}/delete`,
              query: {
                id: `${id}`,
              },
            }}
          >
            <SecondaryButton alt='Eliminar' label='Eliminar' small />
          </LinkEl>
        </CardEl>
      </BookDetailViewEl>
    </>
  )
}
