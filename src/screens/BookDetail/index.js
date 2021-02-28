import React, { useEffect } from 'react'
import useFetch from 'utils/useFetch'
import { Header } from 'components/Header'
import { SecondaryButton } from 'components/SecondaryButton'
import { Tag } from 'components/Tag'
import {
  ActionsEl,
  BookDetailViewEl,
  BookDescriptionEl,
  BookImageEl,
  BookInfoContainerEl,
  BookTitleEl,
  CardEl,
  CategoriesContainerEl,
  FlexColumnEl,
  LinkEl,
} from './style'

export const BookDetail = ({ match }) => {
  const {
    params: { id },
  } = match
  const [bookById, fetchBookById] = useFetch()

  useEffect(() => {
    fetchBookById({
      url: `http://18.130.120.189/api/books/${id}`,
      method: 'GET',
    })
  }, [fetchBookById])

  if (bookById.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (bookById.isSuccess) {
    const bookData = bookById.data

    return (
      <>
        <Header isPrivate />
        <BookDetailViewEl>
          <div>
            <CardEl>
              <div>
                <BookImageEl src={bookData.image} />
              </div>
              <FlexColumnEl>
                <ActionsEl>
                  <LinkEl
                    key={id}
                    to={{
                      pathname: `/books/:${id}/delete`,
                      query: {
                        id: `${id}`,
                      },
                    }}
                  >
                    <SecondaryButton alt="Eliminar" label="Eliminar" small />
                  </LinkEl>
                  <LinkEl
                    key={id}
                    to={{
                      pathname: `/books/:${id}/edit`,
                      query: {
                        id: `${id}`,
                      },
                    }}
                  >
                    <SecondaryButton alt="Editar" label="Editar" small />
                  </LinkEl>
                </ActionsEl>
                <BookDescriptionEl>{bookData.description}</BookDescriptionEl>
                <BookInfoContainerEl>
                  <BookTitleEl>{bookData.title}</BookTitleEl>
                  <CategoriesContainerEl>
                    {bookData.categories?.map((category) => (
                      <Tag label={`${category.name}`} type={`${category.name}`} />
                    ))}
                  </CategoriesContainerEl>
                </BookInfoContainerEl>
              </FlexColumnEl>
            </CardEl>
          </div>
        </BookDetailViewEl>
      </>
    )
  }
  return null
}
