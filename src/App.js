import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import { CSSTransition } from "react-transition-group";

// Actions 
import { setActiveUser } from './store/actions'

// Styles
import './styles/app.scss'

// Pages
import Home from './pages/Home'
import Login from './pages/authentication/LoginUser'
import Register from './pages/authentication/RegisterUser'
import Iphone from './pages/products/Iphone'
import Watch from './pages/products/Watch'

// Components
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const Dispatch = useDispatch()

  const activeUser = Object.keys(useSelector(state => state.activeUser)).length

  if (sessionStorage.getItem('activeUser') && !activeUser) {
      Dispatch(setActiveUser(sessionStorage.getItem('activeUser')))
  }

  return (
  <Router>
    {
    activeUser?
    <Header/>:
    null
    }
    <Switch>
      <PrivateRoute exact path="/">
        <Home/>
      </PrivateRoute>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/register">
        <Register/>
      </Route>

      <PrivateRoute path="/watch">
            <Watch/>
      </PrivateRoute>

      <PrivateRoute path="/iphone">
          <CSSTransition appear in classNames="iphone" timeout={100}>
            <Iphone/>
          </CSSTransition>
      </PrivateRoute>
    </Switch>
  </Router>
  )
}

export default App