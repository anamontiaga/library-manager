import React from "react"
import { BrowserRouter as Router, Switch/* , Route */ } from 'react-router-dom'
import PrivateRoute from './components/router/PrivateRoute'
import PublicRoute from './components/router/PublicRoute'
import { HOME, BOOKS } from './config/router/paths'
import { Home } from './components/views/Home'
import { Books } from './components/views/Books'

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path={HOME} component={Home} />
        <PrivateRoute path={BOOKS} component={Books} />
        {/* {routes.map((route, idx) => (
          <AppRoute path={route.path} component={route.component} key={idx} />
        ))} */}
      </Switch>
    </Router>
  )
}

export default App
