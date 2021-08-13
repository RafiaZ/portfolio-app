import React from 'react'

import Burger from '../header/Burger'
import Popup from './Popup'
import '../header/Navbar.css'

function Navbar() {
    return (
        <>
        <div className="navbar">
            
            <div className="logo">
                <h3>Rafia</h3>
            </div>
            <ul className="navbar-list">
                <li className="navbar-list-item"><a href="#">Home</a></li>
                <li className="navbar-list-item"><a href="#">About</a></li>
                <li className="navbar-list-item"><a href="#">Skills</a></li>
                <li className="navbar-list-item"><a href="#">Resume</a></li>
                <li className="navbar-list-item"><a href="#">Portfolio</a></li>
                <li className="navbar-list-item"><a href="#">Contact</a></li>
            </ul>
            <Burger/>
            
        </div>
         <div>
         <Popup/>
     </div>

     </>
    )
}

export default Navbar
