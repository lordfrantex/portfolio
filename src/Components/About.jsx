import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faAward, faFaceSmile, } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../css/aboutMe.css'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const About = () => {
    return (
        <div >
            <div className="heading-style" id='about'>
                <h2>About Me</h2>
            </div>
            <div className="about-container">
                <div className="image">
                    <img src="/media/CNI_8505.jpg" alt="" />
                </div>
                <div className="description-container">
                    <div className="tiles">
                        <div className="tiles1">
                            <span><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></span>
                            <h4>Experience</h4>
                            <p>3+ Years</p>
                        </div>
                        <div className="tiles2">
                            <span><FontAwesomeIcon icon={faAward}></FontAwesomeIcon></span>
                            <h4>Projects Completed</h4>
                            <p>25+</p>
                        </div>
                        <div className="tiles3">
                            <span><FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon></span>
                            <h4>Happy Clients</h4>
                            <p>50+</p>
                        </div>
                    </div>
                    <div className="writeup">
                        <p> <span> Hello, Welcome!!! </span><br /> I am Franklyn, a front end web developer.
                            I help clients develop stunning website to increase their visibility online. I also help clients integrate custom features that suits their requirement. I am  also open to engage you personally for consultancy and problem solving. Below are some of the reasons why you will want to have a website:


                        </p>
                        <ul>
                            <li><span> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> Having a website increases your online presence and visibility</li>
                            <li><span> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> Having a website affords you the ability to market online</li>
                            <li><span> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> Having a website adds to your company's credibility</li>
                            <li><span> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> Your customers expect to see your website</li>
                            <li><span> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> Your customers expect to see your website</li>

                        </ul>
                    </div>
                    <div className="button">
                        <button className='resume'>Download Resume</button>
                        <button className='hire'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About