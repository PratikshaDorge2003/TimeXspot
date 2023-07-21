import React from 'react'
import Navbar from './Navbar'

function Home() {

    return (
        <div className='Home'>
            <Navbar />
            <div className='centerized'>
                <div className='left'>
                    <h1 className='heading'>TimeXSpot</h1>
                    <h3 className="tagline"> Strum Your Melody : Discover Your Perfect Note !</h3>
                    <h5 className='tagline'>Welcome to our Guitar Haven, where music comes alive. Discover a diverse collection of high-quality guitars that cater to every skill level and musical style. </h5>
                    <div className='centerized'>
                      <div><a href="https://www.facebook.com" target="_blank"><img className="img1" src="./facebook.png"></img> </a> </div>
                      <div><a href="https://www.instagram.com" target="_blank"><img className="img1" href="www.instagram.com" src="./instag.png"></img></a> </div>
                      <div><a href="https://www.linkedin.com" target="_blank"><img className="img1" href="www.linkedIn.com" src="./linkedIn.png"></img> </a> </div>  
                    </div>
                </div>
                <div className='right'>
                    <div className='design'>
                        <img src="./guitar.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home