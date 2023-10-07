import { BiTime, BiDollarCircle } from 'react-icons/bi';



const Events = ({ event }) => {
  const { id, picture, title, price, time, description } = event;

  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl border">
          <figure className="px-10 pt-10">
            <img
              src={picture}
              alt="event-photos"
              className="rounded-xl h-[200px] w-full"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-[#1f1e1e]">{title}</h2>
            <p className="text-lg text-[#777784]">{description}</p>
            <div className="flex gap-10">
                <p className="text-lg font-medium">
                    <div className='flex items-center text-center gap-2'>
                    <BiDollarCircle className='text-[#fe3c01b7]'></BiDollarCircle> 
                    <span className="text-[#fe3c01bd] text-xl" >{price} $</span>
                    </div>
                    </p>
                <p className="text-lg font-medium">
                   <div className='flex items-center text-center gap-2'>
                   <BiTime className='text-[#fe3c01be]'></BiTime> 
                    <span className="text-[#fe3c01cb] text-xl">{time}</span>
                   </div>
                    </p>
            </div>
            <div className="card-actions">
              <button className="btn bg-[#fe3c01ce] text-white">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
