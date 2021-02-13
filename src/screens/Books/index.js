import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import useFetch from 'utils/useFetch'
import { BookItem } from 'components/BookItem'
import { Header } from 'components/Header'
import { SelectInput } from 'components/SelectInput'
import { Colors } from 'styles/colors'
import { BackgroundEl, BooksViewEl, LinkEl, LoaderContainerEl } from './style'

export const Books = () => {
  const [books, fetchBooks] = useFetch()
  const [categories, fetchCategories] = useFetch()
  const [selectedCategories, setSelectedCategories] = useState()

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
          color={`${Colors.yellow}`}
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

    const categoryOptions = categoriesData.map((category) => {
      return {
        value: `${category.name}`,
        label: `${category.name}`,
        id: `${category.id}`,
      }
    })

    const filteredBooks = selectedCategories?.map((selectedCategory) =>
      booksData.filter((book) =>
        book.categories.every((category) => category.name === selectedCategory.value)
      )
    )

    const concatBookArrayByCategory = []
    const booksFilteredByCategory = concatBookArrayByCategory.concat.apply(
      concatBookArrayByCategory,
      filteredBooks
    )

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index
    }

    const uniqueFilteredBooks = booksFilteredByCategory.filter(onlyUnique)

    return (
      <BackgroundEl>
        <Header isPrivate />
        <BooksViewEl>
          <SelectInput
            onChange={(value) => setSelectedCategories(value)}
            options={categoryOptions}
          />
          {uniqueFilteredBooks.map((book) => (
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
              <BookItem id={book.id} image={book.image} title={book.title} />
            </LinkEl>
          ))}
        </BooksViewEl>
      </BackgroundEl>
    )
  }
  return null
}
