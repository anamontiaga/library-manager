import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { Categories } from './components/Categories'
import { Logout } from './components/Logout'
import {
  BOOKS,
  BOOK_DETAIL,
  BOOK_DELETE,
  BOOK_CREATE,
  BOOK_EDIT,
  CATEGORIES,
  HOME,
  LOGOUT,
} from './config/router/paths'
import { AuthContextProvider } from './contexts/authContext'
import { MyThemeProvider } from './contexts/themeToggleContext'
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute'
import { BookCreate } from './screens/BookCreate'
import { BookDelete } from './screens/BookDelete'
import { BookDetail } from './screens/BookDetail'
import { Books } from './screens/Books'
import { Home } from './screens/Home'

import { GlobalStyles } from './styles/global'

function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <AuthContextProvider>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <PublicRoute path={HOME} component={Home} exact />
            <PrivateRoute path={LOGOUT} component={Logout} exact />
            <PrivateRoute path={BOOKS} component={Books} exact />
            <PrivateRoute path={CATEGORIES} component={Categories} exact />
            <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact />
            <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact />
            <PrivateRoute path={BOOK_DELETE} component={BookDelete} exact />
            <PrivateRoute path={BOOK_EDIT} component={BookCreate} exact />
          </Switch>
        </HashRouter>
      </AuthContextProvider>
    </MyThemeProvider>
  )
}

export default App
