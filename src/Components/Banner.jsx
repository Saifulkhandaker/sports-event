import React from 'react';
import banner  from "../assets/Images/Banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero h-[70vh]">
            <img
          className="hero-overlay md:h-[70vh] inset-70 bg-white opacity-50 w-full rounded-none"
          src={banner}
          alt="banner"
        />
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="text-left">
      <p className='font-bold text-white text italic'>"We are the Event Management Specialsts"</p>
      <h1 className="mb-5 text-5xl text-white font-bold">CELEBRATE YOUR EVENTS THAT <br /> LASTS LONGER </h1>
      <hr className='border-t-2 border-red-300 w-[50%]' />
    </div>
  </div>
</div>
        </div>  
    );
};

export default Banner;