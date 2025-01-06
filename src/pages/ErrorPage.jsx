import React from 'react';
import errorJsonData from "../assets/lottie/er.json"
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (

        <div className='container mx-auto mt-3'>
         
            <div className='h-[400px]'>
                <Lottie animationData={errorJsonData} loop={true} 
                className='h-full object-contain w-full' 
                />
            </div>
            <div className='mx-auto pb-20 w-1/2'>
                <Link to="/" className="btn bg-black text-white w-full"> Back to Home </Link>
            </div>
        </div>




    );
};

export default ErrorPage;