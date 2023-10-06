import { CiLocationOn, CiTimer, CiDollar } from 'react-icons/ci';

const Event = ({event}) => {

    const {id, picture, title, location, date, price} = event;

    return (
        <div>
            <div className='flex text-left items-center gap-3 bg-slate-200 border-2'>
            <figure><img className='w-40 h-fit md:w-60' src={picture}/></figure> 
              <div className="space-y-2 text-black">
                <h3 className='text-sm md:text-xl font-bold'>{title}</h3>
                <p className='font-medium text-lg flex gap-3 text-center items-center'><CiLocationOn></CiLocationOn>{location}</p>
                <p className='font-medium text-lg flex gap-3 text-center items-center'><CiTimer></CiTimer>{date}</p>
                <p className='font-medium text-lg flex gap-3 text-center items-center'><CiDollar></CiDollar> {price} $</p>
                <button className='btn rounded-lg text-white bg-gray-400'>View Details</button>

           </div>   
        </div> 
        </div>
    );
};

export default Event;