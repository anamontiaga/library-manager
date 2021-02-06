import React, { useEffect } from 'react'
import useFetch from '../../../utils/useFetch'

export const Categories = () => {
  const [state, fetchCategories] = useFetch()

  useEffect(
    function () {
      fetchCategories({
        url: 'http://18.130.120.189/api/categories',
        method: 'GET',
      })
    },
    [fetchCategories]
  )

  if (state.isLoading) {
    return <div>Cargando categorías...</div>
  }

  if (state.isFailed) {
    return <div>Error. Vuelve a intentarlo...</div>
  }

  if (state.isSuccess) {
    const { data } = state
    console.log('CATEGORIES', data)
    const categories = data
    return (
      <div style={{ background: 'red' }}>
        {categories.map((category) => (
          <h1>{category.name}</h1>
        ))}
      </div>
    )
  }
  return null
}
