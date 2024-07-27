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
              <h4 className="job__subtitle">Planexware S.A.</h4>
              <h4 className="job__subtitle">July 2023 - Present</h4>
            </div>
            <p className="job__description">
              As a QA Tester, I focus on garantee the software quality through manual test executions and collaboration with development team.
              I create test plans, design and execute test cases. I participate in meetings where new features and improvements are exposed.
              <ul className="job__list">
                <li className="job__item">
                  <h5 className="job__item_title">Microsoft Azure for test plans</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">SQL</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Designing and creation of test cases</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Unitary, integration and regression tests</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Report of bugs</h5>
                </li>
              </ul>
            </p>
          </article>

          <article className="experience__job">
            <h3 className="experience_subcontainer__title">GIBIO</h3>
            <div className="job__data">
              <h4 className="job__subtitle">UTN FRBA</h4>
              <h4 className="job__subtitle">March 2022 - March 2023</h4>
            </div>
            <p className="job__description">
              I had to design and build a platform from scratch where a student can create his own account and ask for a medical shift.
              This development includes: a landing page where users can create an account or see important information about GIBIO, 
              several user interfaces where users can login with his email and password, backend for login, sign up and complete a form and
              a database for persist the user information using the Hibernate ORM. Many highlights are, for example, using of MVC pattern and object-oriented programming.
              <ul className="job__list">
                <li className="job__item">
                  <h5 className="job__item_title">React</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Spring with Java</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Hibernate</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">MVC pattern</h5>
                </li>
                <li className="job__item">
                  <h5 className="job__item_title">Object-oriented programming</h5>
                </li>
              </ul>
            </p>
          </article>
      </section>
    </div>
  )
}

export default Experience