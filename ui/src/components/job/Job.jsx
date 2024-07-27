import React from 'react'
import './job.css'

function Job(props) {
  return (
    <article className="experience__job">
      <h3 className="experience_subcontainer__title">{props.jobTitle}</h3>
      <div className="job__data">
        <h4 className="job__subtitle">{props.company}</h4>
        <h4 className="job__subtitle">{props.date}</h4>
      </div>
      <p className="job__description">
        {props.description}
        <ul className="job__list">
          <li className="job__item">
            <h5 className="job__item_title">{props.skillTitle1}</h5>
          </li>
          <li className="job__item">
            <h5 className="job__item_title">{props.skillTitle2}</h5>
          </li>
          <li className="job__item">
            <h5 className="job__item_title">{props.skillTitle3}</h5>
          </li>
          <li className="job__item">
            <h5 className="job__item_title">{props.skillTitle4}</h5>
          </li>
          <li className="job__item">
            <h5 className="job__item_title">{props.skillTitle5}</h5>
          </li>
        </ul>
      </p>
    </article>
  )
}

export default Job;