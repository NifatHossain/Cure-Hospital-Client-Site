import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingAnimation from './loading.json'
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location= useLocation();
    if(loading){
        return <div className="w-full flex justify-center ">
            <Lottie className="" animationData={loadingAnimation} />
        </div>

    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default PrivateRoute;