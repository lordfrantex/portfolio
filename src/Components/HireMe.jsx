import React from 'react'
import '../css/hireMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

const HireMe = () => {
    return (
        <div className='hire-cover'>
            <h3 className='hire'>Why Hire Me?</h3>

            <div className='hire-container'>
                <div className="hire-text">
                    Are you having issues getting clients? Does your business need more visibility in the circular space?
                    Then you are in the right place. Below are some of the services I offer.
                    <ul>
                        <li>
                            <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>
                            Landing pages
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                            Ecommerce website
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                            Portfolio website

                            <li>
                                <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                                Dynamic / Static websites
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                                Business, School, Hospital website
                            </li>

                            <li>
                                <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                                Responsive designs across all screen sizes
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                                Customized UI features integration
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                                Consultancy
                            </li>
                            <span><FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon> </span>

                            Figma to ReactJs implementation
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HireMe