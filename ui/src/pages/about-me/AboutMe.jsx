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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus esse cumque distinctio in asperiores ipsum quisquam eius. Porro earum dolores quos perferendis laboriosam quaerat eius vel impedit suscipit tenetur.
          Et sit fugiat cum corrupti, similique consequatur reiciendis recusandae nesciunt, ut a tenetur eveniet saepe. Earum, dolor, fuga optio deserunt eum dolorum aspernatur obcaecati voluptas corrupti dolores perspiciatis qui aliquid?
        </p>
        <div className="about_me__subcontainer">
          <h3 className="about_me__subtitle"><span style={{fontWeight: '700' , color: 'rgb(255, 115, 0)'}}>Location</span>: Buenos Aires, Argentina.</h3>
          <h3 className="about_me__subtitle"><span style={{fontWeight: '700' , color: 'rgb(255, 115, 0)'}}>Some interests</span>: guitars, computers and travelling.</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutMe