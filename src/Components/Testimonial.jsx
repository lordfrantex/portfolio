import React, { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/testimonial.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const Testimonial = () => {
    return (
        <div id='testimonial'>

            <div className="heading-style" >
                <h2>Testimonials</h2>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testifiers">
                        <span className="right-quote">
                            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                        </span>
                        <span className="left-quote">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </span>

                        <div className="image">
                            <img src="/media/boy.png" alt="" />


                        </div>
                        <div className="texts">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quidem excepturi illo distinctio quaerat ipsum similique, natus voluptates,
                                repudiandae labore incidunt repellendus perferendis?</p>
                            <div className="name">
                                <span>Roland Rich</span>
                                <span>C.E.O Mohztec Technologies</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Testimonial