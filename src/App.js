import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './components/router/PrivateRoute'
import PublicRoute from './components/router/PublicRoute'
import { AuthContextProvider } from './contexts/authContext'
import { BOOKS, BOOK_DETAIL, BOOK_CREATE, CATEGORIES, HOME, LOGOUT } from './config/router/paths'
import { Books } from './components/views/Books'
import { BookDetail } from './components/views/BookDetail'
import { BookCreate } from './components/views/BookCreate'
import { Categories } from './components/views/Categories'
import { Home } from './components/views/Home'
import { Logout } from './components/views/Logout'
import { MyThemeProvider } from './contexts/themeToggleContext'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <AuthContextProvider>
        <Router>
          <Switch>
            <PublicRoute path={HOME} component={Home} exact />
            <PrivateRoute path={LOGOUT} component={Logout} exact />
            <PrivateRoute path={BOOKS} component={Books} exact />
            <PrivateRoute path={CATEGORIES} component={Categories} exact />
            <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact />
            <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact />
          </Switch>
        </Router>
      </AuthContextProvider>
    </MyThemeProvider>
  )
}

export default App
