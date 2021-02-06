import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { routes } from "./routes"
import AppRoute from "./routes/route"

function App() {
  return (
    <Router>
      <Switch>
        <Switch>
          {routes.map((route, idx) => (
            <AppRoute path={route.path} component={route.component} key={idx} />
          ))}
        </Switch>
      </Switch>
    </Router>
  )
}

export default App
