import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Contact = () => {
    return (
        <div>
            <div className="bg-[#331411] text-white text-center items-center">
                <h1 className="text-5xl font-medium  py-10">Contact Us</h1>
            </div>
            <div className='w-11/12 mx-auto mt-10'>
            <div className='items-center text-center '>
              <h2 className='text-xl text-[#777777] font-medium'>Contact us if you need our services. We will be happy to make your events memorable!</h2>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                <div className='bg-[#01cb93] text-white py-10 px-5 rounded-tl-3xl rounded-br-3xl space-y-2'>
                    <FaMapLocationDot className='text-4xl mb-4'></FaMapLocationDot>
                    <h4 className='text-xl font-medium'>Address</h4>
                    <h3 className='text-sm md:text-2xl font-medium'>38-2 Hilton Street, California</h3>
                </div>
                <div className='bg-[#0170cb] text-white py-10 px-5 rounded-tl-3xl rounded-br-3xl  space-y-2'>
                    <FaSquarePhone className='text-4xl mb-4' ></FaSquarePhone>
                    <h4 className='text-xl font-medium'>Phone</h4>
                    <h3 className='text-sm md:text-2xl font-medium'>(+01) 123 456 7890</h3>
                </div>
                <div className='bg-[#fe3c01d8] text-white py-10 px-5 rounded-tl-3xl rounded-br-3xl  space-y-2'>
                    <HiOutlineMailOpen className='text-4xl mb-4'></HiOutlineMailOpen>
                    <h4 className='text-xl font-medium'>Address</h4>
                    <h3 className='text-sm md:text-2xl font-medium'>38-2 Hilton Street, California</h3>
                </div>
            </div>
            <div className='mt-10 border py-10'>
                <h1 className='text-4xl text-center font-medium text-[#777777]'>MESSAGE FORM</h1>
                <div className='text-center mt-10'>
                <div>
                    <input className='border py-2 px-5 w-[30%] mr-4 ' type="text" placeholder='Your Name' name="" id="" />
                    <input className='border py-2 px-5 w-[30%]' type="text" placeholder='Your Email' name="" id="" />
                </div>
                <div className='mt-4'>
                    <input className='border py-2 px-5 w-[30%] mr-4 ' type="text" placeholder='Your Number' name="" id="" />
                    <input className='border py-2 px-5 w-[30%]' type="text" placeholder='Where Do You Heard About Us' name="" id="" />
                </div>
                <div className='mt-4'>
                <input className='border py-4 px-5 w-[61%]' type="text" placeholder='Your Message' />
                </div>
                <div className='mt-4 mb-4'>
                    <p className='text-[#777777] font-medium'>10+6</p>
                    <input className='border w-[20%]' type="text" />
                </div>
                <button className='btn px-10 text-white bg-[#fe3c01d8] rounded-sm'>Send Comment</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Contact;