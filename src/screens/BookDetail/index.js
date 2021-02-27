import React from 'react'
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

export const BookDetail = ({ location }) => {
  console.log({ location })
  const {
    query: { categories, description, id, image, title },
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
            <BookDescriptionEl>{description}</BookDescriptionEl>
            <BookInfoContainerEl>
              <BookTitleEl>{title}</BookTitleEl>
              <CategoriesContainerEl>
                {categories?.map((category) => (
                  <Tag label={`${category.name}`} type={`${category.name}`} />
                ))}
              </CategoriesContainerEl>
            </BookInfoContainerEl>
          </FlexColumnEl>
        </CardEl>
      </BookDetailViewEl>
    </>
  )
}
