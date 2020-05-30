import React, { Component } from 'react'

// Components
import Register from '../../components/authentication/Register'

export default class RegisterUser extends Component {
    render() {
        return (
            <div className="center-content gradient-background">
                <Register/>
            </div>
        )
    }
}
