import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()

            .then((result) => {
                const user = result.user;
                console.log(user);

                setUser(user);

                Swal.fire({
                    title: "Wow!",
                    text: "Your google account is signed in successfully!",
                    icon: "success"
                });
                       navigate('/');

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                console.log("login error:", errorCode, errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Error: ${errorMessage}`,

                });
                // ...
            });
    }

    return (
        <div className="flex justify-center flex-col px-8 mb-5">
            <div className="divider">Or</div>

            <button onClick={handleGoogleSignIn}
                className='btn btn-outline 
                 text-blue-700 flex justify-center'>
                <FaGoogle /> Google Login!
            </button>
        </div>
    );
};

export default SocialLogin;