
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../main";



const Login = () => {

    const { handalLogin } = useContext(authContext)

    const handalSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        handalLogin(email, password)

    }


    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen">
                <div className="hero-content  md:w-[500px] flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold text-center mt-3">Login now!</h1>
                        <form onSubmit={handalSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center">Now This Website Please <span className="text-green-600 hover:underline"><Link to={'/register'}>Regester</Link> </span> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;