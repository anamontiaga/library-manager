import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { animated, useSpring } from 'react-spring'
import useFetch from 'utils/useFetch'
import { Alert } from 'components/views/Alert'
import { Header } from 'components/views/Header'
import { MainButton } from 'components/views/MainButton'
import { ContainerEl, ErrorEl, FormEl, FormContainerEl } from './style'

export const BookCreate = () => {
  const [state, postBook] = useFetch()
  const [initialised, setInitialised] = useState(false)
  const [alert, setAlert] = useState(false)

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => setInitialised(true))

  const onSubmit = (data) => {
    postBook({
      url: 'http://18.130.120.189/api/books',
      method: 'POST',
      body: JSON.stringify({ data })
    })
  }

  const startFormAnimation = useSpring({
    transform: initialised ? 'translateY(0)' : 'translateY(100vh)',
    transition: '0.8s',
  })

  const openAlertAnimation = useSpring({
    opacity: alert ? '1' : '0',
    transition: '0.4s',
  })

  return (
    <ContainerEl>
      <Header />
      <animated.div style={startFormAnimation}>
        <FormContainerEl>
          <FormEl onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input name="title" ref={register({ required: true })} />
              {errors.title && <ErrorEl>This field is required</ErrorEl>}
            </div>
            <MainButton type="submit" label="Guardar" />
          </FormEl>
          {state.isLoading && <div>Creating user</div>}
          {/* {state.isFailed && setAlert(true)} */}
          {state.isSuccess && <div>User created successfully</div>}
        </FormContainerEl>
        {/* {alert && (
          <div style={{ marginTop: 'auto' }}>
            <animated.div style={openAlertAnimation}>
              <Alert
                message="Ouccch! Ha habido un error"
                subMessage="Vuelve a crear el libro!"
                onClose={() => setAlert(false)}
              />
            </animated.div>
          </div>
        )} */}
      </animated.div>
    </ContainerEl>
  )
}

