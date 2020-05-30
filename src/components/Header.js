import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



class Header extends Component {
    constructor(props) {
        super(props)
        console.log(props.location.pathname)
    }

    render() {
        return (
            <div className="header">
                <Link to="/"><i className="icon logo"></i></Link>
                <nav className="nav">
                    <Link to="/iphone" className={`nav-link ${this.props.location.pathname === '/iphone'? 'active': ''}`}> iPhone</Link>
                    <Link to="/macbook" className={`nav-link ${this.props.location.pathname === '/macbook' ? 'active': ''}`}>MacBook Pro</Link>
                    <Link to="/watch" className={`nav-link ${this.props.location.pathname === '/watch' ? 'active': ''}`}>Watch</Link>
                    <div className="nav-link notify">Notify me</div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeUser: state.activeUser
    }
}

export default withRouter(connect(mapStateToProps)(Header))
