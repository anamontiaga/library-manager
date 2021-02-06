import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = (props) => {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Redirect to={HOME} />
  }
  return <Route {...props} />
}

export default PrivateRoute
