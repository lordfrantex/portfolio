import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import '../css/Header.css'
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquareCaretUp, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedinIn, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Resume from './Resume'
const Header = () => {

    const [open, setOpen] = useState(true)

    const openNav = () => {
        setOpen(val => !val)
    }

    return (
        <div className='header-container'>
            <nav className="navigation">
                <div className="logo">
                    <Link to='#home'>
                        <img src="/media/myLogoEdited.jpg" alt="" />
                    </Link>
                </div>
                <span className='bar' onClick={openNav}>
                    <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
                </span>
                <ul className='main-nav'>
                    <li className="home"> <Link smooth to='#home'>Home</Link> </li>
                    <li className="home"> <Link smooth to='#about'>About me</Link> </li>
                    <li className="home"> <Link smooth to='#skill'>Skills</Link> </li>
                    <li className="home"> <Link smooth to='#projects'>Projects</Link> </li>
                    <li className="home"> <Link smooth to='#resume'>Resume</Link> </li>
                    <li className="home"> <Link smooth to='#testimonial'>Testimonials</Link> </li>
                    <li className="home"> <Link smooth to='#contact'>Contact me</Link> </li>

                </ul>

            </nav>
            <ul className={`show-nav ${!open ? 'open-nav' : 'hide-nav'}`}>
                <li className="home"> <Link to='/'>Home</Link> </li>
                <li className="home"> <Link to='#'>About me</Link> </li>
                <li className="home"> <Link to='/skills'>Skills</Link> </li>
                <li className="home"> <Link to='/testimonial'>Testimonials</Link> </li>
                <li className="home"> <Link to='/resume'>Resume</Link> </li>
                <li className="home"> <Link to='#'>Contact me</Link> </li>

            </ul>
        </div>
    )
}

export default Header