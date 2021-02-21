import React from 'react'
import { Header } from 'components/Header'
import { SecondaryButton } from 'components/SecondaryButton'
import { Tag } from 'components/Tag'
import {
  BookDetailViewEl,
  BookImageEl,
  BookInfoContainerEl,
  BookTitleEl,
  CardEl,
  CategoriesContainerEl,
  FlexColumnEl,
  LinkEl
} from './style'

export const BookDetail = ({ location }) => {
  const {
    query: { categories, id, image, title },
  } = location

  return (
    <>
      <Header isPrivate />
      <BookDetailViewEl>
        <CardEl>
          <div>
            <BookImageEl src={image} />
          </div>
          <FlexColumnEl>
            <LinkEl
              to={{
                pathname: `/books/:${id}/delete`,
                query: {
                  id: `${id}`,
                },
              }}
            >
              <SecondaryButton alt="Eliminar" label="Eliminar" small />
            </LinkEl>
            <BookInfoContainerEl>
              <BookTitleEl>{title}</BookTitleEl>
              <CategoriesContainerEl>
                {categories?.map((category) =>
                  <Tag label={`${category.name}`} />
                )}
              </CategoriesContainerEl>
            </BookInfoContainerEl>
          </FlexColumnEl>
        </CardEl>
      </BookDetailViewEl>
    </>
  )
}
