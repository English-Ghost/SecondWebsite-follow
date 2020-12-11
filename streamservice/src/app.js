import React from 'react'
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Home,
  Browse,
  Signin,
  Signup
} from './pages/index'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener} from './hooks'

export default function App() {

  const { user } = useAuthListener();


  return (
    <Router>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN} exact>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP} exact>
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
