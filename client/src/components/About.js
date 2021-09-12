import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about">
            <div className="wrapper">
                <h1>About Hears the News:</h1>
                <p className="purpose">The purpose of our app is to provide the latest news in an audible format. We intend to help those with visual impairments and ADHD 
                by easing their daily news comsumption.</p>
                <h2 className="hackathon">Hackathons: AbilityHacks, Develop To Disrupt, Digital EduHack</h2>
                <h2>Our Team:</h2>
                <ul>
                    <li><p>Kevin Zhang</p></li>
                    <li><p>Herman Vuong</p></li>
                    <li><p>David Zhou</p></li>
                    <li><p>Armaan Nanji</p></li>
                </ul>
            </div>
        </div>
    )
}