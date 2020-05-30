import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

// Actions 
import { setActiveUser } from './store/actions'

// Styles
import './styles/app.scss'

// Pages
import Home from './pages/Home'
import Login from './pages/authentication/LoginUser'
import Register from './pages/authentication/RegisterUser'
import Iphone from './pages/products/Iphone'
import Macbook from './pages/products/Macbook'
import Watch from './pages/products/Watch'

// Componets
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

            <Route path="/watch">
                <Watch/>
            </Route>

            <Route path="/macbook">
                <Macbook/>
            </Route>

            <Route path="/iphone">
                <Iphone/>
            </Route>
        </Switch>
    </Router>
    )
}

export default App