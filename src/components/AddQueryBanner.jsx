import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import askLottieData from "../assets/lottie/ask.json"

const AddQueryBanner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-500
 to-purple-500 text-white rounded-lg p-10 my-5">
                <div className="flex justify-center">
                    <Lottie
                        animationData={askLottieData}
                        loop={true}
                        style={{ width: "30vw", height: "20vw" }}
                        />

                </div>
                <div className="text-center">

                    {/* <h1 className="text-4xl font-extrabold mb-4">Have a Question?</h1> */}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            '',
                            1000,
                            'Have a Question?',
                            1000,
                            'Add Queries!!!',
                            2000,

                        ]}
                        speed={50}
                        className="text-4xl font-extrabold mb-4"
                        repeat={Infinity}
                    />
                    <p className="text-lg my-2">Your questions help us make better recommendations.</p>
                    <Link to="/addQueries" className="btn btn-primary btn-lg px-8" >  + Add Query</Link>
                </div>
            </div>

        </div>
    );
};

export default AddQueryBanner;