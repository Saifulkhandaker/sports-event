import React from 'react';
import banner  from "../../src/assets/Images/main_banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <img src={banner} alt="" />
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl md:text-7xl text-white font-bold">Extreme <br /> MountainBike <br /> Enthusiasts</h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;