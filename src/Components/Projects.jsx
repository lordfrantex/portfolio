import React from 'react'
import '../css/project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquareCaretUp, faBarsStaggered, faAward, faCodeFork, faBarChart, faCookieBite, faTimes, faClock, faCircle, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {


    return (
        <div id='projects'>
            <div className="heading-style" >
                <h2>My Projects</h2>
            </div>
            <div className="project-container">


                <div className="project-card">
                    <img src="../media/firstProject.png" alt="" />
                    <div className="icons">
                        <span>
                            <a href="https://github.com/lordfrantex/portfolio" target="_blank"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        </span>


                    </div>
                </div>
                <div className="project-card">
                    <img src="../media/secondSite.png" alt="" />
                    <div className="icons">
                        <span>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </span>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects