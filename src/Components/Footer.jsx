import logo from "../assets/Images/Logo.png"
import img from "../assets/Images/Baby Shower.jpg"
import img2 from "../assets/Images/Engajement Event.jpg"
import img3 from "../assets/Images/Wedding Event.jpg"
import img4 from "../assets/Images/Anniversery Event.jpg"

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] py-10 mt-20">
     <div className="flex text-center justify-center items-center pt-10">
      <img src={logo} alt="" />
     </div>
     <hr className="border-t-1 mt-5 border-red-300 w-[50%] mx-auto mb-10" />
     <div className="grid grid-cols-1 px-10 md:px-0 md:flex justify-center gap-10" >
     <div className="text-white mb-4">
     <h3 className="">About <span className="text-[#FE3E01]">Dvents</span></h3>
      <p>The Event Specialists</p>
      <p>Best Event Services</p>
      <p>Best Budget</p>
     </div>
     <div className="text-white mb-4">
     <h3>Keep In <span className="text-[#FE3E01]">Touch</span></h3>
      <p>38-2 Hilton Street, California, USA</p>
      <p> (+01) 123 456 7890</p>
      <p>info@dvents.org</p>
     </div>
     <div>
      <h3 className="text-white mb-4"><span className="text-[#FE3E01]">Events</span> Gallary</h3>
      <div className="grid grid-cols-2 gap-2">
      <img className="w-24 h-20" src={img} alt="" />
      <img className="w-24 h-20"  src={img2} alt="" />
      <img className="w-24 h-20"  src={img3} alt="" />
      <img className="w-24 h-20"  src={img4} alt="" />
      </div>
     </div>
     </div>
     <hr className="border-t-1 mt-5 border-gray-200 w-[90%] mx-auto mb-10" />
     <p className="text-center  text-sm md:text-lg font-thin text-[#FE3E01]">© 2023 Dvents _ The Events Specialists All Rights Reserved. Terms of UsePrivacy Policy</p>
    </div>
  );
};

export default Footer;
