import React from 'react'

function Hero() {
  return (
        <>
        <div className="container">
          <div className="main-section">
            <div className="hero-section">
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET
             DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

             <div className="her-second-section">
             <button className='hero-button-one'>Shop Now</button>
            <button className='hero-button-two'>Category</button>
             </div>

             <div className="hero-third-section">
              <p>also available on</p>
             </div>

             <div className="hero-fourth-section">
            <img src="/images/flipkart.png" alt="flipkirt" />
            <img src="/images/amazon.png" alt="amazon" />
             </div>
            </div>
            {/* Second section*/}
            <div className='main-section-second'>
            <img src="/images/shoe_image.png" alt="" />
            </div>
          </div>
        </div>
        {/* <main className='main '>
          <div className='main-section'>
            <h1 >YOUR FEET DESERVE THE BEST</h1>
            <h6>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET
             DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h6>
            <button>Shop Now</button>
            <button className='hero-button'>Category</button>
            <br />
            <p>also available on</p>
            <img src="/images/flipkart.png" alt="flipkirt" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
          <div className="image">
            <img src="/images/shoe_image.png" alt="" />
          </div>
        </main> */}
        </>
  )
}

export default Hero