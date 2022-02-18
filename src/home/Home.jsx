import React from 'react'
import './Home.css'

import { IconContext } from 'react-icons/lib'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function Home() {
    return (
        <IconContext.Provider value={{ color: '#8d99ae', size: 30 }}>
            <div className="hero-section" id="home">
                {/* <div className="hero-img">
                    <img src={doors} />
                </div> */}
                <div className="hero-text">
                    <h1>Your Future Starts With A Door...</h1>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="social">
                    <a
                        className="fb"
                        // href="#"
                        title="Facebook"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook />
                    </a>
                    <a
                        className="insta"
                        // href="#"
                        title="Instagram"
                        rel="noopener noreferrer"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        className="tt"
                        // href="#"
                        title="Twitter"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter />
                    </a>
                    <a
                        className="yt"
                        // href="#"
                        title="YouTube"
                        rel="noopener noreferrer"
                    >
                        <BsYoutube />
                    </a>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Home
