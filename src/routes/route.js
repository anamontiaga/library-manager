import React from "react"
import { Route } from "react-router-dom"

const AppRoute = ({ component: Component }) => (
  <Route render={(props) => <Component {...props} />} />
)

export default AppRoute
