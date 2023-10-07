import React from "react";
import founder from "../assets/Images/Founder & Director.jpg";
import eventmanager from "../assets/Images/Event Manager.jpg";
import eventmanage2 from "../assets/Images/Event Manager 2.jpg";

const Team = () => {
  return (
    <div className="w-11/12 mx-auto mt-16 mb-10 text-center items-center ">
      <hr className="border-t-1 mt-4 border-red-300 w-[80%] mx-auto mb-10" />
      <div className="border py-5">
      <div className="space-y-5 mb-16">
        <h1 className="font-bold text-5xl text-[#777784]"><span className="text-[#FE3E01]">Dvents</span> Team</h1>
        <p className="text-[#777784] text-lg ">We make your events smart & impactful by personalised event management services</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">

        {/* card */}
        <div className="card text-[#FE6435] text-center items-center">
          <figure>
            <img className="rounded-full" src={founder} alt="car!" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-3xl font-mono ">Charles Hasman</h2>
            <p className="text-xl font-serif">Founder & Director</p>
          </div>
        </div>
        {/* card 2*/}
        <div className="card text-[#FE6435] text-center items-center">
          <figure>
            <img className="rounded-full" src={eventmanager} alt="car!" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-3xl font-mono ">kethy Hilton</h2>
            <p className="text-xl font-serif">Event Manager</p>
          </div>
        </div>
        {/* card 3*/}
        <div className="card text-[#FE6435] text-center items-center">
          <figure>
            <img className="rounded-full" src={eventmanage2} alt="car!" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-3xl font-mono ">Eva Taylor</h2>
            <p className="text-xl font-serif">Supervisor</p>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Team;
