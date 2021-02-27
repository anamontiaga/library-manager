import React, { useEffect, useState } from 'react'
import { createBrowserHistory } from 'history'
import { useForm } from 'react-hook-form'
import useFetch from 'utils/useFetch'
import { BOOKS } from 'config/router/paths'
import { convertBase64 } from 'utils/base64'
import { Header } from 'components/Header'
import { MainButton } from 'components/MainButton'
import { SelectInput } from 'components/SelectInput'
import {
  AddImageContainerEl,
  ContainerEl,
  ErrorEl,
  FormEl,
  ImageEl,
  InputFileEl,
  InputTitleEl,
  LabelEl,
  SelectInputContainerEl,
  TextAreaDescriptionEl,
} from './style'

export const BookCreate = ({ location }) => {
  const {
    query: { id },
  } = location

  const isEdit = !!id

  const [state, postBook] = useFetch()
  const [editState, editBook] = useFetch()
  const [bookCategories, setBookCategories] = useState([])
  const [categories, fetchCategories] = useFetch()
  const [bookById, fetchBookById] = useFetch()
  const [baseImage, setBaseImage] = useState('')
  const history = createBrowserHistory({ forceRefresh: true })

  const { register, handleSubmit, errors } = useForm()

  const categoriesToPost = bookCategories?.map((categoryToPost) => {
    return {
      id: `${categoryToPost.id}`,
      name: `${categoryToPost.label}`,
    }
  })

  useEffect(() => {
    fetchCategories({
      url: 'http://18.130.120.189/api/categories',
      method: 'GET',
    })
    fetchBookById({
      url: `http://18.130.120.189/api/books/${id}`,
      method: 'GET',
    })
  }, [fetchCategories, fetchBookById])

  if (categories.isFailed || (isEdit && bookById.isFailed)) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (categories.isSuccess || (isEdit && bookById.isSuccess)) {
    const categoriesData = categories.data
    const bookData = bookById.data

    const categoryOptions = categoriesData?.map((category) => {
      return {
        value: `${category.name}`,
        label: `${category.name}`,
        id: `${category.id}`,
      }
    })

    const uploadImage = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase64(file)
      setBaseImage(base64)
    }

    const onSubmit = (data) => {
      const dataToSend = {
        ...data,
        base64Image: baseImage,
        categories: categoriesToPost,
      }
      isEdit &&
        editBook({
          url: `http://18.130.120.189/api/books/${id}`,
          method: 'POST',
          body: JSON.stringify(dataToSend),
        })

      !isEdit &&
        postBook({
          url: 'http://18.130.120.189/api/books',
          method: 'POST',
          body: JSON.stringify(dataToSend),
        })
      history.push(BOOKS)
    }

    return (
      <ContainerEl>
        <Header isPrivate />
        <div>
          <FormEl onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                width: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <InputTitleEl
                name="title"
                ref={register({ required: true })}
                value={isEdit && bookData && bookData.title}
              />
              {errors.title && <ErrorEl>This field is required</ErrorEl>}
              <TextAreaDescriptionEl
                name="description"
                ref={register({ required: true })}
                value={isEdit && bookData && bookData.description}
              />
              <InputFileEl
                name="image"
                type="file"
                id="file-input"
                onChange={(e) => {
                  uploadImage(e)
                }}
              />
              <SelectInputContainerEl>
                <SelectInput
                  onChange={(category) => {
                    setBookCategories(category)
                  }}
                  options={categoryOptions}
                  // defaultValue={isEdit && categoryOptions[0]}
                />
              </SelectInputContainerEl>
              <AddImageContainerEl>
                <LabelEl htmlFor="file-input">
                  {isEdit ? 'EDITAR PORTADA' : 'AÑADIR PORTADA'}
                </LabelEl>
                <ImageEl src={isEdit && bookData ? bookData.image : baseImage} />
              </AddImageContainerEl>
              <MainButton type="submit" label={isEdit ? 'Editar' : 'Guardar'} />
            </div>
          </FormEl>
        </div>
        {state.isLoading && <div>Creating book</div>}
        {state.isFailed && <div>Error creating book</div>}
        {state.isSuccess && <div>Success creating book</div>}
        {editState.isLoading && <div>Editing book</div>}
        {editState.isFailed && <div>Error editing book</div>}
        {editState.isSuccess && <div>Success editing book</div>}
      </ContainerEl>
    )
  }
  return null
}
