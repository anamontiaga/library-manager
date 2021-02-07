import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../utils/useFetch'
import { LOGOUT } from '../../../config/router/paths'

export const Books = () => {
  const [state, fetchBooks] = useFetch()

  useEffect(
    function () {
      fetchBooks({
        url: 'http://18.130.120.189/api/books',
        method: 'GET',
      })
    },
    [fetchBooks]
  )

  if (state.isLoading) {
    return <div>Cargando libros...</div>
  }

  if (state.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (state.isSuccess) {
    const { data } = state
    const books = data
    console.log('ESTOY EN BOOKS', books)
    return (
      <div style={{ background: 'red' }}>
        <Link to={LOGOUT}>Cerrar Sesión</Link>
        {books.map((book) => (
          <h1>{book.title}</h1>
        ))}
      </div>
    )
  }
  return null
}
