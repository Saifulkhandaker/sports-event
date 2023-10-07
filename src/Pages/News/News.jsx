import UpcomingEvents from "../../Components/UpcomingEvents";


const News = () => {
    return (
        <div>
             <div className="bg-[#331411] text-white text-center items-center">
                <h1 className="text-5xl font-medium  py-10">Our Upcoming Events</h1>
            </div>
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-[#777777] text-center mt-10">Make sure to attend our upcoming <span className="text-[#FE3E01]">DVENTS</span> Events</h1>
            </div>
            <UpcomingEvents></UpcomingEvents>

            
        </div>
    );
};

export default News;