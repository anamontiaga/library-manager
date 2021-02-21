import React from 'react'
import { useHistory } from 'react-router-dom'
import useFetch from 'utils/useFetch'
import { BOOKS } from 'config/router/paths'
import { Header } from 'components/Header'
import { SecondaryButton } from 'components/SecondaryButton'
import { ContainerEl } from './style'

export const BookDelete = ({ location }) => {
  const [state, deleteBook] = useFetch()

  const {
    query: { id },
  } = location
  const history = useHistory()

  const onDeleteBook = () => {
    const raw = ''
    deleteBook({
      url: `http://18.130.120.189/api/books/${id}`,
      method: 'DELETE',
      body: raw,
    })
    history.push(BOOKS)
  }

  return (
    <ContainerEl>
      <Header isPrivate />
      <p style={{ color: 'red' }}>¿Estás seguro de que quieres borrar el libro?</p>
      <SecondaryButton
        alt="Si, sestoy seguro!"
        label="Si, sestoy seguro!"
        onClick={onDeleteBook}
        small
      />
      {state.isLoading && <div>Deleting book</div>}
      {state.isFailed && <div>Error deleting book</div>}
      {state.isSuccess && <div>Success deleting book</div>}
    </ContainerEl>
  )
}
