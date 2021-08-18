import React, {useState} from 'react'

import Burger from '../header/Burger'
import Popup from './Popup'
//import Header from './Header'
import '../header/Navbar.css'


function Navbar() {

    const links = [
        {label: 'Home', href:'http://localhost:3000/'},
        {label: 'About', href:'http://localhost:3000/'},
        {label: 'Skills', href:'http://localhost:3000/'},
        {label: 'Resume', href:'http://localhost:3000/'},
        {label: 'Portfolio', href:'http://localhost:3000/'},
        {label: 'Contact', href:'http://localhost:3000/'}

    ]

    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const handlePopup = () => {
        setPopupIsOpen((prevState)=> !prevState);
      
      };
     
    return (
        <>
        <div className="navbar">
            
            <div className="logo">
                <h3>Rafia</h3>
            </div>
            <ul className="navbar-list">
                {
            links.map(link => <li className="navbar-list-item"><a {...link.href}>{link.label}</a></li>)
            }
            </ul>
            <Burger onClick={handlePopup}/>
            
        </div>

        <div>
         {popupIsOpen && < Popup/>}
     </div>

     </>
    )
}

export default Navbar
