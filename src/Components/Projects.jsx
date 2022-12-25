import React from 'react'
import '../css/project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquareCaretUp, faBarsStaggered, faAward, faCodeFork, faBarChart, faCookieBite, faTimes, faClock, faCircle, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    const projectCards = (
        <div className="project-card">
            <img src="../media/firstProject.png" alt="" />
            <div className="icons">
                <span>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </span>
                <span>

                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </span>
                <span>

                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </span>
                <span>

                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </span>

            </div>
        </div>

    )

    return (
        <div id='projects'>
            <div className="heading-style" >
                <h2>My Projects</h2>
            </div>
            <div className="project-container">
                {projectCards}
                {projectCards}
                {projectCards}
            </div>
        </div>
    )
}

export default Projects