import React from 'react'
import {
    Route,
    Redirect,
  } from "react-router-dom";

import { useSelector } from 'react-redux'



export default ({ children, ...rest }) => {
  const activeUser = Object.keys(useSelector(state => state.activeUser)).length
  console.log(activeUser)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          activeUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }