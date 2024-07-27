import React from 'react'
import './experience.css'

import Job from '../../components/job/Job'

function Experience() {
  return (
    <div id='experience' className='container'>
      <section className="experience__container">
        <h2 className="experience__title">Professional experience</h2>
          <Job
            jobTitle = 'Testing internship'
            company = 'Planexware S.A.'
            date = 'July 2023 - Present'
            description = 'As a QA Tester, I focus on garantee the software quality through manual test executions and collaboration with development team. I create test plans, design and execute test cases. I participate in meetings where new features and improvements are exposed.'
            skillTitle1 = 'Microsoft Azure for test plans'
            skillTitle2 = 'SQL'
            skillTitle3 = 'Designing and creation of test cases'
            skillTitle4 = 'Unitary, integration and regression tests'
            skillTitle5 = 'Reporting of bugs'
          ></Job>

          <Job
            jobTitle = 'GIBIO'
            company = 'UTN FRBA'
            date = 'March 2022 - March 2023'
            description = 'I had to design and build a platform from scratch where a student can create his own account and ask for a medical shift. This development includes: a landing page where users can create an account or see important information about GIBIO, several user interfaces where users can login with his email and password, backend for login, sign up and complete a form and a database for persist the user information using the Hibernate ORM. Many highlights are, for example, using of MVC pattern and object-oriented programming.'
            skillTitle1 = 'React'
            skillTitle2 = 'Spring with Java'
            skillTitle3 = 'Hibernate'
            skillTitle4 = 'MVC pattern'
            skillTitle5 = 'Object-oriented programming'
          ></Job>
      </section>
    </div>
  )
}

export default Experience