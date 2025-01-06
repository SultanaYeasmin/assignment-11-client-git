import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from "../assets/lottie/signup.json"
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const Registration = () => {
    const { createUser, setUser, updateUserProfile, user } = useContext(AuthContext);
    console.log(`user:${user}`)
     const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log("signup info:", email, password, name, photoURL);

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUser(user);
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    // Profile updated!
                   navigate('/');
                 Swal.fire({
                                    title: "Wow!",
                                    text: "You are signed-up successfully!",
                                    icon: "success"
                                });
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                console.log(user)
               
                // ...
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
                
            });


    }

    return (
        <div className="hero bg-blue-200 p-10">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerLottieData} loop={true} />
                </div>
                <div className="card w-full max-w-sm shrink-0">
                    <h1 className="text-xl mt-4 text-center text-blue-700">Register Form</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            {/* <input type="url" name="photoURL" placeholder="photoURL" className="input input-bordered" required /> */}
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='flex mt-5'>
                            <p className='text-base'>Already signed up?</p>
                            <Link to="/login">
                                <button className='btn btn-sm block btn-outline btn-info'>Login</button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;