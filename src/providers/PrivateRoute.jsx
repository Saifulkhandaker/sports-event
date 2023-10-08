import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <span className="loading flex justify-center mx-auto text-center items-center loading-dots loading-lg"></span>
    }

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    


};

export default PrivateRoute;