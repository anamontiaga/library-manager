import React from "react"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = (props) => {
  const isAuthenticated = false
  if (isAuthenticated) {
    return <Redirect to={BOOKS} />
  }
  return <Route {...props} />
}

export default PublicRoute
