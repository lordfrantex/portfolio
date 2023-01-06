import React, { useRef, useEffect, useState } from 'react'
import '../css/preloader.css'
import { Audio, BallTriangle } from 'react-loader-spinner'
const Preloader = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (

        loading && (
            <div className='preloader-cover'>
                <div className='preloader'><BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />
                    <img src="/media/myLogoEdited.jpg" alt="" />
                </div>
            </div>
        )


    )
}

export default Preloader