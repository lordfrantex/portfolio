import React, { useRef } from 'react'
import '../css/resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquareCaretUp, faBarsStaggered, faAward, faCodeFork, faBarChart, faCookieBite, faTimes, faClock, faCircle, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from 'react-router-dom'
import { NavHashLink as Link } from 'react-router-hash-link'

const Resume = () => {


    return (
        <div className='resume-cover' id='resume'>
            <div className="heading-style" >
                <h2>My Resume</h2>
            </div>
            <div className="resume-container">
                <div className="resume-title">
                    <Link to='#education' className="headNav"
                        activeClassName="selected">
                        <span> <FontAwesomeIcon icon={faAward}></FontAwesomeIcon> </span>
                        <a className=''>Education</a>
                    </Link>
                    <Link to='#works' className="headNav" activeClassName='selected'>
                        <span> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> </span>
                        <a >Work History</a>
                    </Link>
                    <Link to='#skills' className="headNav" activeClassName='selected'>
                        <span> <FontAwesomeIcon icon={faCodeFork}></FontAwesomeIcon> </span>
                        <a >Programming Skills</a>
                    </Link>
                    <Link to='#project' className="headNav">
                        <span> <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon> </span>
                        <a>Projects</a>
                    </Link>

                    <Link to='#interest' className="headNav">
                        <span> <FontAwesomeIcon icon={faCookieBite}></FontAwesomeIcon> </span>
                        <a>Interests</a>
                    </Link>
                    <div className="nav"></div>
                </div>
                <div className="resume-description">
                    <div className="education" id='education'>
                        <div className="">
                            <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                            <div className="school">
                                <p>Federal University of Technology, Akure, Nigeria.</p>
                                <p>Bachalor of Technology Cyber Security</p>
                            </div>
                            <div className="date">
                                <p>2019-2024</p>
                            </div>
                        </div>
                        <div className="">
                            <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                            <div className="school">
                                <p>High School</p>
                                <p>Federal Science and Technical College, Uromi, Nigeria.</p>
                            </div>
                            <div className="date">
                                <p>2013-2019</p>
                            </div>
                        </div>

                    </div>
                    <div className="work" id='works'>
                        <div className="">
                            <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                            <p>Frantex </p>
                        </div>
                        <div className="">
                            <h3>FRONT END ENGINEER</h3>
                            <p className='first'> I am currently working as a front end developer, as well as a freelancer.</p>
                            <p className='second'>We develope and design beautiful and custom UI components for our clients. I have worked for various clients and I have developed various kinds of website such as:
                                <ul>
                                    <li><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                        <p>Ecommerce website with full fledged functionality</p>
                                    </li>
                                    <li><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                        <p>Blog App</p>
                                    </li>
                                    <li><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                        <p>Medical website</p>
                                    </li>
                                </ul>
                            </p>
                            <div className="date">
                                <p>2020-Present</p>
                            </div>

                        </div>
                    </div>
                    <div className="skills" id='skills'>
                        <div className="">
                            <label>HTML</label>
                            <progress value={90} max={100}></progress>
                        </div>
                        <div className="">
                            <label>CSS</label>
                            <progress value={80} max={100}></progress>
                        </div>
                        <div className="">
                            <label>JAVASCRIPT</label>
                            <progress value={79} max={100}></progress>
                        </div>
                        <div className="">
                            <label>REACT</label>
                            <progress value={80} max={100}></progress>
                        </div>
                        <div className="">
                            <label>BOOTSTRAP</label>
                            <progress value={90} max={100}></progress>
                        </div>
                        <div className="">
                            <label>SCSS</label>
                            <progress value={75} max={100}></progress>
                        </div>
                        <div className="">
                            <label>GIT & GITHUB</label>
                            <progress value={85} max={100}></progress>
                        </div>
                    </div>
                    <div className="project" id='project'>
                        <div className="">
                            <div className="head">
                                <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                                <div className="date">
                                    <p>2021-2022</p>
                                </div>
                            </div>
                            <div className="description">
                                <h3>E-commerce Website</h3>
                                <span>Technology Used: ReactJs | CSS | HTML | Redux Toolkit | SwiperJs</span>
                                <p>I built this full fledged website for a company selling CCTV, electrical, solar and IoT gadgets, with all ecommerce core functionalities susch as cart functionality, signin and signup functionality, payment integration and lots more. </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="head">
                                <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                                <div className="date">
                                    <p>2021-2022</p>
                                </div>
                            </div>
                            <div className="description">
                                <h3>Personal Portfolio Website</h3>
                                <span>Technology Used: ReactJs | CSS | HTML | SCSS | SwiperJs</span>
                                <p>This is my personal portfolio website to exhibit my skills and projects.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="head">
                                <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
                                <div className="date">
                                    <p>2021-2022</p>
                                </div>
                            </div>
                            <div className="description">
                                <h3>Blog Website</h3>
                                <span>Technology Used: ReactJs | CSS | HTML | Redux Toolkit | SwiperJs | Bootstrap</span>
                                <p> A blog site where users can read, write, update, review and delete a blog post.   </p>
                            </div>
                        </div>

                    </div>
                    <div className="education" id='interest'>
                        Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                        consecteturLorem ipsum dolor
                        sit amet consectetur adipisicing elit. Eaque quas cumque ipsam explicabo pariatur, molestias ex dignissimos fugiat? Impedit officia dolorem aspernatur exercitationem delectus reiciendis unde, est provident recusandae sapiente.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume