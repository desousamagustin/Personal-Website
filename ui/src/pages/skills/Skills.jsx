import React from 'react'
import './skills.css'
import Skill from '../../components/skill/Skill'

// All skill logos
import reactLogo from '../../assets/img/skills/react.png'
import htmlLogo from '../../assets/img/skills/html.png'
import cssLogo from '../../assets/img/skills/css.png'
import javascriptLogo from '../../assets/img/skills/js.png'
import javaLogo from '../../assets/img/skills/java.png'
import cplusplusLogo from '../../assets/img/skills/cplusplus.png'
import sqlServerLogo from '../../assets/img/skills/sqlserver.png'
import azureLogo from '../../assets/img/skills/azure.png'
import sqlLogo from '../../assets/img/skills/sql.png'
import gitLogo from '../../assets/img/skills/git.png'


function Skills() {

  return (
    <div id='skills' className='container'>
        <div className="skills__container">
            <h2 className="skills__title">Skills</h2>
        </div>
        <div className="skills__container">
            <section className="skills__section">
                <h3 className="skills_section__title">Front End</h3>
                <div className="skills_section__container">
                    <Skill title = 'HTML' src = {htmlLogo} alt = 'HTML logo' />
                    <Skill title = 'CSS' src = {cssLogo} alt = 'CSS logo' />
                    <Skill title = 'JavaScript' src = {javascriptLogo} alt = 'JavaScript logo' />
                    <Skill title = 'React' src = {reactLogo} alt = 'React logo' />
                </div>
            </section>

            <section className="skills__section">
                <h3 className="skills_section__title">Back End</h3>
                <div className="skills_section__container">
                    <Skill title = 'Java language' src = {javaLogo} alt = 'Java logo' />
                    <Skill title = 'C/C++ language' src = {cplusplusLogo} alt = 'C/C++ logo' />
                    <Skill title = 'SQL Server' src = {sqlServerLogo} alt = 'SQL Server logo' />
                </div>
            </section>

            <section className="skills__section">
                <h3 className="skills_section__title">Testing</h3>
                <div className="skills_section__container">
                    <Skill title = 'Microsoft Azure' src = {azureLogo} alt = 'Microsoft azure logo' />
                    <Skill title = 'SQL' src = {sqlLogo} alt = 'SQL logo' />
                </div>
            </section>

            <section className="skills__section">
                <h3 className="skills_section__title">Others</h3>
                <div className="skills_section__container">
                    <Skill title = 'Git' src = {gitLogo} alt = 'Git logo' />
                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Skills