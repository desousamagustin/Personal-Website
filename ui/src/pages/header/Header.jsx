import React from 'react'
import './header.css'

import Nav from '../../components/nav/Nav'

function Header() {
  return (
    <div id='header' className='container'>
      <Nav></Nav>
      <div className="header__container">
        <div className="header__subcontainer">
          <h1 className="header__title">Hi! My name is <span style={{color: 'rgb(255, 115, 0)', fontWeight: '400'}}>Agustín</span></h1>
          <h2 className="header__subtitle">QA tester, developer and software engineering student.</h2>
          <div className="subcontainer__cv_button_container">
            <a href='' className="header__cv_button">Download CV</a>
          </div>
        </div>
        <div className="header__subcontainer">
          <div className="header__img_container">
            <img src={require('../../assets/img/guy programming.png')} alt="A guy programming" className="header__img" />
          </div>
          <div className="social_media_icons">
            <a href=""><i class="fa-brands fa-linkedin social_media_icon"></i></a>
            <a href=""><i class="fa-brands fa-square-github social_media_icon"></i></a>
            <a href=""><i class="fa-brands fa-instagram social_media_icon"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

/*https://bhavya.dev/*/