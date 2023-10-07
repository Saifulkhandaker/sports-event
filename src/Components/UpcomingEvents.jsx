import image1 from "../assets/Images/1.jpg"
import image2 from "../assets/Images/2.jpg"
import image3 from "../assets/Images/Anniversery Event.jpg"
import image4 from "../assets/Images/Birthday party events.jpg"

const UpcomingEvents = () => {
    return (
        <div className="items-center w-11/12 mx-auto mt-10 mb-10">
            <hr className="border-t-1 mt-4 border-red-300 w-[80%] mx-auto mb-10" />

            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="text-center items-center space-y-2">
                    <img className="px-6 pt-5" src={image1} alt="" />
                    <h3 className="text-lg font-medium text-[#FE3E01]">APEC 2023</h3>
                    <p className="font-medium text-[#777777]">32-B, Envato St, Themeforest Ave, CA</p>
                    <p className="text-[#363636] font-medium">October 12, 2023</p>
                </div>
                <div className="text-center items-center space-y-2">
                    <img className="px-6 pt-5" src={image2} alt="" />
                    <h3 className="text-lg font-medium text-[#FE3E01]">Marketing Concert</h3>
                    <p className="font-medium text-[#777777]">32-B, Envato St, Themeforest Ave, CA</p>
                    <p className="text-[#363636] font-medium">October 20, 2023</p>
                </div>
                <div className="text-center items-center space-y-2">
                    <img className="px-6 pt-5" src={image3} alt="" />
                    <h3 className="text-lg font-medium text-[#FE3E01]">SEO Conference</h3>
                    <p className="font-medium text-[#777777]">32-B, Envato St, Themeforest Ave, CA</p>
                    <p className="text-[#363636] font-medium">October 29, 2023</p>
                </div>
                <div className="text-center items-center space-y-2">
                    <img className="px-6 pt-5" src={image4} alt="" />
                    <h3 className="text-lg font-medium text-[#FE3E01]">CountDown Event</h3>
                    <p className="font-medium text-[#777777]">32-B, Envato St, Themeforest Ave, CA</p>
                    <p className="text-[#363636] font-medium">November 02, 2023</p>
                </div>
               
            </div>
        </div>
        
    );
};

export default UpcomingEvents;