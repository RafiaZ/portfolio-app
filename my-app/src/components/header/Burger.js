import React, {useState} from 'react'

import Popup from './Popup';
import '../header/Burger.css'

function Burger() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handlePopup = () => {
    setPopupIsOpen(prevState => !prevState);
  };

    return (
        <>
          <div className="burger" onClick={handlePopup}>
              <span className="dash"></span>
              <span className="dash"></span>
              <span className="dash"></span>
          </div>
          {popupIsOpen && <Popup/>}
        </>
    )
}

export default Burger

