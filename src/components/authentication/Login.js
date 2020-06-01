import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Acitons
import { setActiveUser } from '../../store/actions'

// Components
import FormInput from '../forms/FormInput'
import FormButton from '../forms/FormButton'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    validUser = () => {
        return this.props.users.find(user => {
            return user.email === this.state.email && user.password === this.state.password
        })
    }

    logInUser = () => {
        const validUser = this.validUser()
        if (validUser) {
            sessionStorage.setItem('activeUser', JSON.stringify(validUser))
            this.props.setActiveUser(validUser)

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

    render() {
        return (
            <div className="login">
                <div className="heading-text">Sign-In</div>
                <div className="form">
                    <FormInput label="Email" onChange={this.updateEmail} placeHolder="user@email.com"/>
                    <FormInput label="Password" onChange={this.updatePassword} placeHolder="password" type="password"/>
                    <FormButton text="Sign-in" onClick={this.logInUser}/>
                </div>
                <div className="prompt right">
                    <span>Not registered? </span>
                    <Link to="/register">Sign-up</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default withRouter(connect(mapStateToProps,{ setActiveUser })(Login))