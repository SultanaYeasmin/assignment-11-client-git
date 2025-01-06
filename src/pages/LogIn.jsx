import { useContext } from "react";
import { Link } from "react-router-dom";
import loginLottieData from "../assets/lottie/login.json"
import Lottie from "lottie-react";
import SocialLogin from "../components/SocialLogin";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const { signInUser,
        setUser, } = useContext(AuthContext);
        const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("login info:", email, password)
        signInUser(email, password)
            .then((userCredential) => {

                // Signed up 
                const user = userCredential.user;
                console.log("sign-in:", user.email)
                setUser(user);
                Swal.fire({
                    title: "Wow!",
                    text: "You are signed in successfully!",
                    icon: "success"
                });
                    //    navigate('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Error: ${errorMessage}`,

                });
                // ..
            });


    }
   

    return (
        <div>
            <div className="hero my-20 bg-blue-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left py-6">
                       
                            <Lottie animationData={loginLottieData} loop={true} />
                       

                    </div>
                    <div className="card w-full max-w-sm shrink-0">
                        <h1 className="text-lg font-bold text-center text-blue-700">Login Form</h1>

                        <form onSubmit={handleSignIn}
                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password" type="password"
                                    placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex mt-3'>
                                <p className='text-gray-600'>Not yet signed up?</p>
                                <Link to="/registration">
                                    <button className='btn btn-sm block btn-info'>Register</button>
                                </Link>
                            </div>
                           
                        </form>
                   <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
