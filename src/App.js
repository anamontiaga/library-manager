import React, { useEffect } from 'react'
import useFetch from './utils/useFetch'

function App() {
  const [state, fetchBooks] = useFetch()

  useEffect(
    function () {
      fetchBooks({
        url: "https://reqres.in/api/users",
        method: "GET"
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
    return <div>
      <ul>
        {state.data.data.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  }
  return null
}

export default App
