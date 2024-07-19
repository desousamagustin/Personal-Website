import React from 'react'
import './about_me.css'

function AboutMe() {
  return (
    <div id='about_me' className='container'>
      <div className="about_me__container">
        <div className="about_me__img_container">
          <img src={require('../../assets/img/about_me__me.jpg')} alt="Profile picture" className="about_me__img" />
        </div>
      </div>
      <div className="about_me__container">
        <h2 className="about_me__title">About me</h2>
        <p className="about_me__description">
          I am an information systems engineering student at UTN FRBA in Buenos Aires. Currently, I'm in my third year of career and I am doing
          a testing intership at <a href='https://www.planexware.com/' target='_blanck' style={{color: 'rgb(255, 115, 0)' , textDecoration: 'none'}}>Planexware S.A</a>. On the other hand, I really enjoy learning new technologies and create my own projects to improve
          my knowledge. I want to become in a software engineer someday.
        </p>
        <div className="about_me__subcontainer">
          <h3 className="about_me__subtitle"><span style={{fontWeight: '700' , color: 'rgb(255, 115, 0)'}}>Location</span>: Buenos Aires, Argentina.</h3>
          <h3 className="about_me__subtitle"><span style={{fontWeight: '700' , color: 'rgb(255, 115, 0)'}}>Some interests</span>: guitars, computers, learning new things and traveling.</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutMe