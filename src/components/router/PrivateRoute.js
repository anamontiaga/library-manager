import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { HOME } from '../../config/router/paths'
import { useAuthContext } from '../../hooks/useAuthContext'

const PrivateRoute = (props) => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Redirect to={HOME} />
  }
  return <Route {...props} />
}

export default PrivateRoute
