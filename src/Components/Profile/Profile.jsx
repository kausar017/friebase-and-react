import { useContext } from "react";
import { authContext } from "../../main";



const Profile = () => {


    const { user } = useContext(authContext)
    console.log(user);

    return (
        <div>
            {
                user && (
                    <div className="card w-96 mx-auto text-center">
                        <img src={user.photoURL} alt="" />
                        <h1>{user.displayName}</h1>
                        <h5>{user.email}</h5>
                        <h4>{user.providerId}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default Profile;