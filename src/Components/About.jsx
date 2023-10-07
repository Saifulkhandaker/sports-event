import aboutus from "../assets/Images/About us.jpg";
import uslogo from "../assets/Images/us logo.png";

const About = () => {
  return (
    <div className="items-center w-11/12 mx-auto mt-10 mb-10">
      <hr className="border-t-1 mt-4 border-red-300 w-[80%] mx-auto mb-10" />
      <div className="grid grid-cols-1 lg:flex justify-between gap-16 text-center items-center ">
        <div>
          <img className="ml-3 md:ml-40 lg:ml-0" src={aboutus} alt="" />
        </div>
        <div className="space-y-8 lg:text-left flex-1 text-[#777777]">
          <img className="ml-40 md:ml-80 lg:ml-0" src={uslogo} alt="" />
          <h2 className="text-2xl lg:text-4xl font-bold"><span className="text-[#FE3E01]">Dvents</span> Making Events Simpler
          </h2>
          <p className="text-xl lg:text-2xl">
            Make your events smarter & impactful by personalised
            management.
          </p>
          <p className="text-xl">
            Welcome to Dvents, your premier destination for extraordinary event
            experiences. With a passion for creativity and meticulous attention
            to detail, we are your trusted partner in crafting unforgettable
            moments. At Dvents, we believe that every event is a story waiting
            to be told. Our team of dedicated professionals brings a wealth of
            expertise to the table, ensuring that your vision is transformed
            into reality. Whether it's a wedding, corporate gathering, or any
            special occasion, we are committed to making it a resounding
            success. Our mission is to turn your dreams into remarkable events
            that leave a lasting impression. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
