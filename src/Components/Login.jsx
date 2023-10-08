import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
 const { googleSignIn, signIn } = useContext(AuthContext);
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogle = () => {
    googleSignIn()
    .then(result=> {
      console.log(result.user);
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if((email, password)){
      signIn(email, password).then(result =>{
        setError('');
          toast.success("Successfully logged in")
      })
      .catch((err) => {
        setError("Invalid email or password");
      })
    }

    
  };

  return (
    <div>
      <p className="text-lg text-center font-medium text-red-400">{error}</p>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}  className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onSubmit={handleLogin} className="btn bg-[#fe3c01d7] text-white">Login</button>
              </div>
              <button onClick={handleGoogle} className="btn bg-[#fe3c01d7] text-white">Login with Google</button>
              <p>Don't have an account!!! Please <Link className="font-medium underline text-red-600" to="/register">Register</Link></p>
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

export default Login;
