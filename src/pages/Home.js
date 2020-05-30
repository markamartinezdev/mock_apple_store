import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home body-content">
                <div className="welcome">
                    <i className="icon logo"></i>
                    <span className="text">
                        Welcome to Apple
                    </span>
                </div>
                <Link className="see-products-link" to="/iphone">See Our Products</Link>
                <div className="icon-links">
                    <Link className="link" to="/iphone"><i className="icon iphone"></i></Link>
                    <Link className="link" to="/macbook"><i className="icon macbook"></i></Link>
                    <Link className="link" to="/watch"><i className="icon watch"></i></Link>
                </div>
            </div>
        )
    }
}
