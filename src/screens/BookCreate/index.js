import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { animated, useSpring } from 'react-spring'
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
  FormContainerEl,
  ImageEl,
  InputFileEl,
  InputTitleEl,
  LabelEl,
} from './style'

export const BookCreate = () => {
  const [state, postBook] = useFetch()
  const [bookCategories, setBookCategories] = useState([])
  const [categories, fetchCategories] = useFetch()
  const [baseImage, setBaseImage] = useState('')
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()


  const categoriesToPost = bookCategories?.map(categoryToPost => {
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
  }, [fetchCategories])

  if (categories.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (categories.isSuccess) {
    const categoriesData = categories.data

    const categoryOptions = categoriesData.map((category) => {
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
    const dataToSend = { ...data, ...data, base64Image: baseImage, categories: categoriesToPost }
    postBook({
      url: 'http://18.130.120.189/api/books',
      method: 'POST',
      body: JSON.stringify(dataToSend),
    })
    history.push(BOOKS)
  }

  // const startFormAnimation = useSpring({
  //   transform: initialised ? 'translateY(0)' : 'translateY(100vh)',
  //   transition: '0.8s',
  // })

  return (
    <ContainerEl>
      <Header isPrivate />
      {/* <animated.div style={startFormAnimation}> */}
        <FormContainerEl>
          <FormEl onSubmit={handleSubmit(onSubmit)}>
            <div style={{ width: '170px' }}>
              <InputTitleEl name="title" ref={register({ required: true })} />
              {errors.title && <ErrorEl>This field is required</ErrorEl>}
              <InputFileEl
                name="image"
                type="file"
                id="file-input"
                onChange={(e) => {
                  uploadImage(e)
                }}
              />
              <SelectInput
                onChange={(category) => {
                  setBookCategories(category)
                }}
                options={categoryOptions}
              />
              <AddImageContainerEl>
                <LabelEl htmlFor="file-input">AÑADIR PORTADA</LabelEl>
                <ImageEl src={baseImage} />
              </AddImageContainerEl>
            </div>
            <MainButton type="submit" label="Guardar" />
          </FormEl>
          {state.isLoading && <div>Creating book</div>}
          {state.isFailed && <div>Error creating book</div>}
          {state.isSuccess && <div>Success creating book</div>}
        </FormContainerEl>
      {/* </animated.div> */}
    </ContainerEl>
  )
}
return null
}

