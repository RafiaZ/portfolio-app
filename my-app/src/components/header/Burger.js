import React, {useState} from 'react'

import Popup from './Popup';
import '../header/Burger.css'

function Burger() {
    const [isOpen, setIsOpen] = useState(false);

    const handlePopup = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
    
        <div className="burger" onClick={handlePopup}>
            <span className="dash"></span>
            <span className="dash"></span>
            <span className="dash"></span>
        </div>
        </>
    )
}

export default Burger

