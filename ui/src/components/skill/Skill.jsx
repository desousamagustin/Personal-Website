import React from 'react'
import './skill.css'

function Skill({src,alt,title}) {
  return (
    <div className="skill__container">
        <h3 className="skill__title">{title}</h3>
        <img src={process.env.PUBLIC_URL + src} alt={alt} className="skill__img" />
    </div>
  )
}

export default Skill