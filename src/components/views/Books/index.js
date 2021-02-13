import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import useFetch from 'utils/useFetch'
import { BookItem } from 'components/views/BookItem'
import { Header } from 'components/views/Header'
import { SelectInput } from 'components/views/SelectInput'
import { BooksViewEl, LinkEl, LoaderContainerEl } from './style'

export const Books = () => {
  const [books, fetchBooks] = useFetch()
  const [categories, fetchCategories] = useFetch()

  useEffect(
    function () {
      fetchBooks({
        url: 'http://18.130.120.189/api/books',
        method: 'GET',
      }),
        fetchCategories({
          url: 'http://18.130.120.189/api/categories',
          method: 'GET',
        })
    },
    [fetchBooks, fetchCategories]
  )

  if (books.isLoading || categories.isLoading) {
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

  if (books.isFailed || categories.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (books.isSuccess || categories.isSuccess) {
    const booksData = books.data
    const categoriesData = categories.data
    console.log({ categoriesData })
    console.log({ booksData })

    const categoryOptions = categoriesData.map((category) => {
      return {
        value: `${category.name}`, label: `${category.name}`, id: `${category.id}`
      }
    })

    return (
      <>
        <Header isPrivate />
        <BooksViewEl>
          <SelectInput
            onChange={(value) => console.log(value)}
            options={categoryOptions}
          />
          {booksData.map((book) => (
            <LinkEl
              key={book.id}
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
