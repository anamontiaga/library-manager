import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute'
import { AuthContextProvider } from './contexts/authContext'
import {
  BOOKS,
  BOOK_DETAIL,
  BOOK_DELETE,
  BOOK_CREATE,
  CATEGORIES,
  HOME,
  LOGOUT,
} from './config/router/paths'
import { Books } from './screens/Books'
import { BookDetail } from './screens/BookDetail'
import { BookDelete } from './screens/BookDelete'
import { BookCreate } from './screens/BookCreate'
import { Categories } from './components/Categories'
import { Home } from './screens/Home'
import { Logout } from './components/Logout'
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
            <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact />
            <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact />
            <PrivateRoute path={BOOK_DELETE} component={BookDelete} exact />
          </Switch>
        </Router>
      </AuthContextProvider>
    </MyThemeProvider>
  )
}

export default App
