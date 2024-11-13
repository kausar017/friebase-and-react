

import { useContext, useState } from "react";
// import auth from "../../firebase/firebase.init";
import { authContext } from "../../main";

const Home = () => {


    const constexValue = useContext(authContext)
    const { handleGoogleLogin, handalGithubLogin, handalTwitterLogin, handalSignOut, user } = constexValue;


    return (
        <>

            <div className="flex flex-row justify-center min-h-[300px] items-center gap-x-4">
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">Google Login</button>
                <button onClick={handalGithubLogin} className="btn btn-outline btn-primary">GitHub Login</button>
                <button onClick={handalTwitterLogin} className="btn btn-outline btn-info">twitter Login</button>
                <button onClick={handalSignOut} className="btn btn-outline btn-error">Sign Out</button>
            </div>

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

        </>
    );
};

export default Home;