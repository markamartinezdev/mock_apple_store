import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Acitons
import { setActiveUser } from '../../store/actions'

// Components
import FormInput from '../forms/FormInput'
import FormButton from '../forms/FormButton'

class Register extends Component {
    state = {
        fullName: '',
        email: '',
        password: '',
    }

    userExists = () => {
        return this.props.users.find(user => {
            return user.email === this.state.email && user.password === this.state.password
        })
    }

    allFieldsEntered = () => {
        return this.state.password.length > 1 && this.state.email.length > 1 && this.state.fullName.length > 1
    }

    registerNewUser = () => {
        if (this.allFieldsEntered() && !this.userExists()) {
            const newUser = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password
            }

            // save active user in session and in store
            sessionStorage.setItem('activeUser', JSON.stringify(newUser))
            this.props.setActiveUser(newUser)

            // Redirect to home page
            this.props.history.push('/')
        }
    }


    updateEmail = e => {
        this.setState({email: e.target.value})
    }

    updatePassword = e => {
        this.setState({password: e.target.value})
    }

    updateFullName = e => {
        this.setState({fullName: e.target.value})
    }

    render() {
        return (
            <div className="register">
                <div className="heading-text">Sign-Up</div>
                <div className="form">
                    <FormInput label="Full name" onChange={this.updateFullName} placeHolder="full name"/>
                    <FormInput label="Email" onChange={this.updateEmail} placeHolder="user@email.com"/>
                    <FormInput label="Password" onChange={this.updatePassword} placeHolder="password" type="password"/>
                    <FormButton text="Sign-up" onClick={this.registerNewUser}/>
                </div>
                <div className="prompt left">
                    <span>Already registered? </span>
                    <Link to="/login">Sign-in</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default withRouter(connect(mapStateToProps,{setActiveUser})(Register))
