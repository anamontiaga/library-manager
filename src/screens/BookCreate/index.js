import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { animated, useSpring } from 'react-spring'
import useFetch from 'utils/useFetch'
import { Header } from 'components/Header'
import { MainButton } from 'components/MainButton'
import { ContainerEl, ErrorEl, FormEl, FormContainerEl } from './style'

export const BookCreate = () => {
  const [state, postBook] = useFetch()
  const [initialised, setInitialised] = useState(false)
  const [bookImage, setBookImage] = useState('')

  const { register, handleSubmit, errors } = useForm()

  useEffect(() => setInitialised(true))

  const handleImage = (event) => {
    setBookImage(URL.createObjectURL(event.target.files[0])
    )
  }
  const onSubmit = (data) => {
    postBook({
      url: 'http://18.130.120.189/api/books',
      method: 'POST',
      body: JSON.stringify({ title: data.title, image: bookImage}),
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
            <div>
              <input name="title" ref={register({ required: true })} />
              {errors.title && <ErrorEl>This field is required</ErrorEl>}
              <div>
                <input name='image' type="file" ref={register} onChange={handleImage} />
                <img style={{ height: 100 }} src={bookImage} />
              </div>
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
