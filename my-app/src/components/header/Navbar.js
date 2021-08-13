import React from 'react'

import Burger from '../header/Burger'
import '../header/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            
            <div className="logo">
                <h3>Rafia</h3>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <Burger/>
        </div>
    )
}

export default Navbar
