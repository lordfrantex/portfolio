import React, { useRef, useEffect } from 'react'
import '../css/skills.css'
import { motion } from 'framer-motion'
import HireMe from './HireMe'
const Skills = () => {

    return (
        <div id='skill'>
            <div className="heading-style">
                <h2>Skills Set</h2>
            </div>
            <div className="skill-container">

                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='70'>
                                <p>HTML</p>
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='47'>
                                <p>CSS</p>
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='47'>
                                <p>REACT</p>
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='47'>
                                <p>BOOTSTRAP</p>
                                <span>74%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='47'>
                                <p>SCSS</p>
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div className="number" data-num='47'>
                                <p>GIT & GITHUB</p>
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className="">
                <HireMe />
            </div>
        </div>

    )
}

export default Skills