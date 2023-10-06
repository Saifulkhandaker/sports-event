import { useLoaderData } from "react-router-dom";
import Event from "./Event";


const Services = () => {

    const events = useLoaderData();
   

    return (
        <div className="w-11/12 mx-auto">
            <h1 className='text-3xl font-bold mt-6 text-left'>Our Event Services</h1>
             <div className="grid md:grid-cols-2 gap-5 mt-5 mb-10">
            {
                events.map(event => <Event event={event}></Event> )
            }
                
        </div>
        </div>
    );
};

export default Services;