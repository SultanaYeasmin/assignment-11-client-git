// import React from 'react';
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (user) {
        return children;
    }

    if (loading) {
        return <>
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-ring text-accent w-[100px] h-[100px]"></span>
            </div>
        </>
    }


    return (
        <>
            <Navigate to="/login"
                state={location?.pathname}>
            </Navigate>
        </>
    );
};

export default PrivateRoute;