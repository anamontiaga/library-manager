import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import useFetch from '../../../utils/useFetch'
import { BookItem } from '../BookItem'
import { Header } from '../Header'
import { BooksViewEl, LinkEl, LoaderContainerEl } from './style'

export const Books = () => {
  const [state, fetchBooks] = useFetch()

  useEffect(
    function () {
      fetchBooks({
        url: 'http://18.130.120.189/api/books',
        method: 'GET',
      })
    },
    [fetchBooks]
  )

  if (state.isLoading) {
    return (
      <LoaderContainerEl>
        <Loader
          type="ThreeDots"
          color="#f4d03f"
          height={70}
          width={70}
          timeout={4000}
        />
      </LoaderContainerEl>
    )
  }

  if (state.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (state.isSuccess) {
    const { data } = state
    const books = data
    return (
      <>
        <Header isPrivate />
        <BooksViewEl>
          {console.log({ books })}
          {books.map((book) => (
            <LinkEl
              to={{
                pathname: `/books/:${book.id}`,
                query: {
                  title: `${book.title}`,
                  id: `${book.id}`,
                  image: `${book.image}`,
                  categories: book.categories,
                },
              }}
            >
              <BookItem key={book.id} image={book.image} title={book.title} />
            </LinkEl>
          ))}
        </BooksViewEl>
      </>
    )
  }
  return null
}
