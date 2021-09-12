import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import logo from '../assets/logocrop.png'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <div>
                <Link to='/'><img src={logo} className={classes.logo}/></Link>
                <h4 className={classes.name}>Hears The News</h4>
            </div>
            <ul>
                <Link to='/'><li><p>Home</p></li></Link>
                <Link to='/news'><li><p>News</p></li></Link>
                <Link to='/about'><li><p>About</p></li></Link>
            </ul>
        </div>
    )
}
