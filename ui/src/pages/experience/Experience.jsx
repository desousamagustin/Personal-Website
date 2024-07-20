import React from 'react'
import './experience.css'

function Experience() {
  return (
    <div id='experience' className='container'>
      <section className="experience__container">
        <h2 className="experience__title">Professional experience</h2>
          <article className="experience__job">
            <h3 className="experience_subcontainer__title">Testing internship</h3>
            <div className="job__data">
              <h4 className="job__subtitle">Planexware S.A. ---</h4>
              <h4 className="job__subtitle">July 2023 - Present</h4>
            </div>
            <p className="job__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci atque alias, 
              maiores odio illo est incidunt magnam quae corporis quasi tempore praesentium 
              nam provident aliquid animi, voluptate, dolorem ex cupiditate.
              <ul className="job__list">
                <li className="job__item">
                  <h5 className="job__item_title">Microsoft Azure</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">SQL Server</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Create and design test cases</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Regression, unitary and integration tests</h5>
                </li>
              </ul>
            </p>
          </article>

          <article className="experience__job">
            <h3 className="experience_subcontainer__title">GIBIO</h3>
            <div className="job__data">
              <h4 className="job__subtitle">UTN FRBA ---</h4>
              <h4 className="job__subtitle">March 2022 - March 2023</h4>
            </div>
            <p className="job__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci atque alias, 
              maiores odio illo est incidunt magnam quae corporis quasi tempore praesentium nam 
              provident aliquid animi, voluptate, dolorem ex cupiditate.
              <ul className="job__list">
                <li className="job__item">
                  <h5 className="job__item_title">React framework</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Spring framework with Java</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Hibernate</h5>
                </li>
              </ul>
            </p>
          </article>
      </section>
    </div>
  )
}

export default Experience