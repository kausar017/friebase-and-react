import { useContext } from "react";
import { authContext } from "../../main";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {

    // const {user}=useContext(authContext)

    // console.log(children);

    const { user, loading } = useContext(authContext)

    if (loading) {
        return <div className="flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-lg w-28 "></span>
        </div>
    }
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    // else {
    //     alert('Please Login Hear')

    // }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRout;