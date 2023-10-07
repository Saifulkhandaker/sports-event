import { BsArrowBarDown } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleEvent = () => {
  const [event, setEvent] = useState({});
  const { picture, title, price, time, description } = event;

  const { id } = useParams();
  const events = useLoaderData();

  useEffect(() => {
    const findEvent = events.find((event) => event.id == id);
    console.log(findEvent);
    setEvent(findEvent);
  }, [id, events]);

  return (
    <div className="py-10 w-11/12 mx-auto">
      <div className="flex text-center items-center gap-10">
        <h1 className="text-4xl text-[#fe3c01b7] font-medium">{title} </h1>
        <p className="text-4xl mt-4 text-[#fe3c01b7] font-bold">
          <BsArrowBarDown></BsArrowBarDown>
        </p>
      </div>
      <div className="mt-5">
        <img className="md:w-[80%]" src={picture} alt="" />
      </div>
      <div className="mt-5">
        <p className="text-2xl text-[#777784] font-bold w-[80%]">{description}</p>
      </div>
      <div className="flex items-center text-center gap-5 mt-5">
        <p className="text-2xl font-medium">Price: <span className="text-[#fe3c01cb] text-3xl">{price}$</span></p>
        <p className="text-2xl font-medium">Time: <span className="text-[#fe3c01cb] text-3xl">{time}</span></p>
      </div>
      <div>
        <button className="text-white bg-[#fe3c01cb] btn mt-5 px-10 rounded-sm">Book Now</button>
      </div>
    </div>
  );
};

export default SingleEvent;
