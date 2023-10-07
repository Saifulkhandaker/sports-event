import { useLoaderData } from "react-router-dom";
import { AiOutlineArrowDown } from 'react-icons/ai';
import Events from "./Events";

const EventServices = () => {
  const events = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-16 mb-10 text-center ">
        <hr className="border-t-1 mt-4 border-red-300 w-[80%] mx-auto mb-10" />
        <h1 className="text-4xl font-bold mb-8 text-[#777777]">The <span className="text-[#FE3E01]">Event Management</span> Specialists</h1>
        <h4 className="text-lg text-[#777784]">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer <br /> full range of Events Management <span className="text-[#FE3E01] text-xl font-bold ">Services</span> that scale to your needs & budget.</h4>
        <p className="flex justify-center items-center mt-10 text-4xl font-medium text-[#FE3E01]"><AiOutlineArrowDown></AiOutlineArrowDown> </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {events.map((event) => (
        <Events event={event}></Events>
      ))}
    </div>
    </div>
  );
};

export default EventServices;
