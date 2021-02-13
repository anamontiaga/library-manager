import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { animated, useSpring } from 'react-spring'
import useFetch from 'utils/useFetch'
import blobToBase64 from 'utils/base64'
import { Header } from 'components/Header'
import { MainButton } from 'components/MainButton'
import {
  AddImageContainerEl,
  ContainerEl,
  ErrorEl,
  FormEl,
  FormContainerEl,
  ImageEl,
  InputFileEl,
  LabelEl,
} from './style'

export const BookCreate = () => {
  const [state, postBook] = useFetch()
  const [initialised, setInitialised] = useState(false)
  const [bookImage, setBookImage] = useState('')

  const { register, handleSubmit, errors } = useForm()

  useEffect(() => setInitialised(true))

  const handleImage = (event) => {
    setBookImage(URL.createObjectURL(event.target.files[0]))
  }

  const onSubmit = (data) => {
    const baseImage = blobToBase64(bookImage)
    const dataToSend = { ...data, image: baseImage }
    console.log({ dataToSend })
    postBook({
      url: 'http://18.130.120.189/api/books',
      method: 'POST',
      body: JSON.stringify(dataToSend),
    })
  }

  const startFormAnimation = useSpring({
    transform: initialised ? 'translateY(0)' : 'translateY(100vh)',
    transition: '0.8s',
  })

  return (
    <ContainerEl>
      <Header isPrivate />
      <animated.div style={startFormAnimation}>
        <FormContainerEl>
          <FormEl onSubmit={handleSubmit(onSubmit)}>
            <div style={{ width: '170px' }}>
              <input name="title" ref={register({ required: true })} />
              {errors.title && <ErrorEl>This field is required</ErrorEl>}
              <InputFileEl
                name="image"
                type="file"
                id="file-input"
                ref={register}
                onChange={handleImage}
              />
              <AddImageContainerEl>
                <LabelEl htmlFor="file-input">Añadir portada</LabelEl>
                <ImageEl src={bookImage} />
              </AddImageContainerEl>
            </div>
            <MainButton type="submit" label="Guardar" />
          </FormEl>
          {state.isLoading && <div>Creating book</div>}
          {state.isFailed && <div>Error creating book</div>}
          {state.isSuccess && <div>Success creating book</div>}
        </FormContainerEl>
      </animated.div>
    </ContainerEl>
  )
}
