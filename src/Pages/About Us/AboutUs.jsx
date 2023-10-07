import About from "../../Components/About";

const AboutUs = () => {
    return (
        <div>
            <div className="bg-[#331411] text-white text-center items-center">
                <h1 className="text-5xl font-medium  py-10">Who We Are</h1>
            </div>
            <h1 className="text-2xl lg:text-4xl font-medium text-[#777777] text-center mt-10">We <span className="text-[#FE3E01]">Create Events</span> That Lasts</h1>
            <h4 className="text-center mt-5 text-lg text-[#777777]">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer <br /> full range of Events Management Services that scale to your needs & budget.</h4>
            <About></About>
        </div>
    );
};

export default AboutUs;