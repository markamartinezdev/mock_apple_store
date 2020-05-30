import React from 'react'
import { Link } from 'react-router-dom'

export default function VerticalNav(props) {
    return (
        <div className="vertical-nav">
            <Link to="/iphone" className={`link icon iphone ${props.active === 'iphone' ? 'active' : ''}`}/>
            <Link to="/macbook" className={`link icon macbook ${props.active === 'macbook' ? 'active' : ''}`}/>
            <Link to="/watch" className={`link icon watch ${props.active === 'watch' ? 'active' : ''}`}/>
        </div>
    )
}
