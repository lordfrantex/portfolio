import React from 'react'
import '../css/resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'



const Home = () => {
    return (
        <section className='intro-section' id='home'>
            <div className="intro-text">
                <h4>Hi, my name is Franklyn.</h4>
                <p className='typewriter'> I am
                    <span>

                        <Typewriter
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                            words={['front end developer 💻', 'an enthusiastic web developer 😺', 'a cyber security practicioner 🌐 ']} />
                    </span></p>
                <p>I am a front end web developer
                    with tons of experience in developing
                    websites and web apps.  </p>
                <div className="icon">
                    <span><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></span>
                </div>
                <div className="call-to-action">
                    <span><Link to='#'> <button className='resume'> Download Resume</button></Link></span>
                    <span><Link to='#contact'> <button className='hire'> Hire Me</button></Link></span>
                </div>
            </div>
            <motion.div className="vector-image"
                whileInView={{ x: '-10%' }}
                animate={{
                    x: '0px',

                }}

                transition={{
                    duration: 3,
                    type: 'spring',

                }}
            >
                <img src="/media/graph.png" alt="" />
                <img src="/media/boy.png" alt="" />

            </motion.div>
            <span className="whatsApp">
                <a href="https://wa.link/fto6h0">  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
            </span>
        </section>
    )
}

export default Home