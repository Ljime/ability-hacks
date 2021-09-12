import React from 'react'
import classes from './Home.module.css'
import Button from '../components/Button'
import logo from '../assets/news.png'
import { Link } from 'react-router-dom'
import newsapi from '../assets/newsapi.png'
export default function Home() {
    return (
        <div className={classes.home}>
            <Link to='/news'> 
                <Button className={classes.homeButton}>
                    <div> 
                        <h2>Read Articles</h2>
                        <h2>{'->'}</h2>
                    </div>
                    <img src={logo} alt='Logo'></img>
                </Button>
            </Link>
            <h1 className={classes.logoTitle}>Powered By</h1>
            <img src={newsapi} alt='NewsApi'></img>
        </div>
    )
}
