import React, {useState} from 'react'

import Popup from './Popup';
import '../header/Burger.css'

function Burger(props) {


    return (
        <>
          <div className="burger" onClick={props.onClick}>
              <span className="dash"></span>
              <span className="dash"></span>
              <span className="dash"></span>
          </div>

        </>
    )
}

export default Burger

