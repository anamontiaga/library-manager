import React, { useEffect } from "react"
import useFetch from "./utils/useFetch"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './screens/Home'
import Books from './screens/Books'
import Categories from './screens/Categories'

function App() {
  const [state, fetchBooks] = useFetch()

  useEffect(
    function () {
      fetchBooks({
        url: "https://reqres.in/api/users",
        method: "GET",
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
    return (
      // <div>
      //   <ul>
      //     {state.data.data.map((user) => (
      //       <li key={user.id}>{user.email}</li>
      //     ))}
      //   </ul>
      // </div>
      <Router>

        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/books"
            component={Books}
          />
          <Route
            exact
            path="/categories"
            component={Categories}
          />
        </Switch>
      </Router>
    )
  }
  return null
}

export default App
