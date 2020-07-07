import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><i className="icon logo"></i></Link>
        <nav className="nav">
          <Link to="/iphone" className={`text-link nav-link ${this.props.location.pathname === '/iphone'? 'active': ''}`}> iPhone</Link>
          <Link to="/watch" className={`text-link nav-link ${this.props.location.pathname === '/watch' ? 'active': ''}`}>Watch</Link>
        
          <Link className="nav-link icon-link link" to="/iphone"><i className="icon iphone"></i></Link>
          <Link className="nav-link icon-link link" to="/watch"><i className="icon watch"></i></Link>
     
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
