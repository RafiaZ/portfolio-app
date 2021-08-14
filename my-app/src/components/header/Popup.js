import React from 'react'

import './Popup.css'


function Popup() {

     
    return (
        <div className="container">
             <ul className="container-list">
                <li className="popup-list__item"><a className="list__a" href="#">Home</a></li>
                <li className="popup-list__item"><a className="list__a" href="#">About</a></li>
                <li className="popup-list__item"><a className="list__a" href="#">Skills</a></li>
                <li className="popup-list__item"><a className="list__a" href="#">Resume</a></li>
                <li className="popup-list__item"><a className="list__a" href="#">Portfolio</a></li>
                <li className="popup-list__item"><a className="list__a" href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Popup
