// React Libraries
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

// Custom CSS
import '../css/contact.css'

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Emailjs
import emailjs from '@emailjs/browser';

// Fontawesome  Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn, faGithub, faInstagram, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faPerson, faMessage, faPen } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    // Initializing Emailjs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ydc6ji9', 'template_cl22dgy', form.current, 'VcEDoiD7fAsK_FS9B')
            .then((result) => {
                (result.status = 200) && toast("Message Sent Successfully!!! 😊")

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='' id='contact'>

            <div className="heading-style" >
                <h2>Contact Me</h2>
            </div>
            <div className="contact-container">
                <div className="contact-left">
                    <div className="image">
                        <img src="/media/cropped.png" alt="" />

                    </div>
                    <div className="icon">
                        <span> <a href="https://github.com/lordfrantex"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></span>
                        <span> <a href="https://twitter.com/L_Franktex"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></span>
                        <span> <a href="https://web.facebook.com/lord.franktex.9"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></span>
                        <span> <a href="https://www.linkedin.com/in/lord-franktex-37b869235/"> <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></span>
                        <span> <a href="https://www.instagram.com/lordfrantex/"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></span>
                    </div>
                    <p>lordfranktex@gmail.com</p>
                    <p>08102300105</p>
                    <span>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State.</span>
                </div>
                <div className="contact-right">
                    <h4>Send me an email</h4>
                    <form ref={form} onSubmit={sendEmail} className="email-container">
                        <input type="text" placeholder='Name' name='name' />
                        <input type="email" placeholder='Email' name='email' />
                        <input type="text" placeholder='Subject' name='subject' />
                        <textarea placeholder='Start typing here...' name='message'></textarea>
                        <button type='submit'><span> <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon></span> Send</button>
                        <ToastContainer
                            draggable
                            theme='dark'
                            hideProgressBar={false}
                            pauseOnHover
                            pauseOnFocusLoss />
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact