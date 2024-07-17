import React from 'react'
import { useState } from 'react';
import './nav.css'

function Nav() {
  // It goes to the top of the screen
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // It displays or hides the nav links
  const [isVisible, setIsVisible] = useState(window.innerWidth > 700);
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id='nav'>
      <button className="nav__logo" onClick={goToTop}>
        <h6 className='logo__text'>{'< Agustín />'}</h6>
      </button>
      <ul id='links' className='nav__links' style={{ display: isVisible ? 'flex' : 'none' }}>
        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#about-me" className="nav__link">About me</a></li>
        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
        <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
      </ul>
      <div className="nav__icon_container">
        <i class="fa-solid fa-bars nav__icon" onClick={toggleDiv}></i>
      </div>
    </div>
  )
}

export default Nav