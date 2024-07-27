import React from 'react'
import { useState } from 'react';
import './nav.css'
import reloadPage from '../../common-functions/reloadPage';

function Nav() {
  // It displays or hides the nav links
  const [isVisible, setIsVisible] = useState(window.innerWidth > 700);
  const toggleDiv = () => {
    if(window.innerWidth <= 700)
      setIsVisible(!isVisible);
  };

  return (
    <div id='nav'>
      <button className="nav__logo" onClick={reloadPage}>
        <h6 className='logo__text'>{'< Agustín />'}</h6>
      </button>
      <ul id='links' className='nav__links' style={{ display: isVisible ? 'flex' : 'none' }}>
        <li className="nav__item"><a href='#home' className="nav__link" onClick={toggleDiv}><i class="fa-solid fa-house nav__li_icon"></i> Home</a></li>
        <li className="nav__item"><a href="#about_me" className="nav__link" onClick={toggleDiv}><i class="fa-solid fa-user nav__li_icon"></i> About me</a></li>
        <li className="nav__item"><a href="#skills" className="nav__link" onClick={toggleDiv}><i class="fa-solid fa-book nav__li_icon"></i> Skills</a></li>
        <li className="nav__item"><a href="#experience" className="nav__link" onClick={toggleDiv}><i class="fa-solid fa-folder nav__li_icon"></i> Experience</a></li>
      </ul>
      <div className="nav__icon_container">
        <i class="fa-solid fa-bars nav__icon" onClick={toggleDiv}></i>
      </div>
    </div>
  )
}

export default Nav