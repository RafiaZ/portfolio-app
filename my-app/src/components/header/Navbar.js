import React from 'react'
import '../header/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h3>Rafia</h3>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
