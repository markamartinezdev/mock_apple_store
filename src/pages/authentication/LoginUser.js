import React, { Component } from 'react'

import LoginIn from '../../components/authentication/Login'

export default class LoginUser extends Component {
    render() {
        return (
            <div className="center-content gradient-background">
                <LoginIn/>
            </div>
        )
    }
}
