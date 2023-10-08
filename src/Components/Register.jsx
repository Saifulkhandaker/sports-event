import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Register = () => {


  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const navigate = useNavigate()

const handleRegister = (e )=> {
  e.preventDefault();

   if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})[a-zA-Z0-9@#$%^&+=!]*$/.test(password)){
    setError(
      "Password must be at least eight characters long and contain at least one uppercase letter and one special character."
    )
    toast.error('Password must be at least eight characters long and contain at least one uppercase letter and one special character.')
   }
   else{
    setError('');
    if(email) {
      signUp(email, password)
      .then(result => 
        toast.success("successfully registered"));
        setTimeout(() => {
          navigate("/login");
         }, 3000);
    }
   }
}

    return (
        <div>
             <div className="hero min-h-screen ">
              
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
          
            <h1 className="text-5xl font-bold">Register now !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered" 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                 
                </label>
              </div>
              <div className="form-control mt-6">
                <button onSubmit={handleRegister} className="btn bg-[#fe3c01d7] text-white">Register</button>
              </div>
              <p>Already have an account!!! Please <Link className="font-medium underline text-[#3cfe01]" to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
      position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
      ></ToastContainer>
    </div>
    );
};

export default Register;