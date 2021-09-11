import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <Link to='/'><li><p>Logo</p></li></Link>
                <Link to='/'><li><p>Home</p></li></Link>
                <Link to='/news'><li><p>News</p></li></Link>
                <Link to='/about'><li><p>About</p></li></Link>
            </ul>
        </div>
    )
}
