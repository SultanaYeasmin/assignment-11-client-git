import axios from 'axios';
import { useContext, useEffect } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Add a response interceptor
        axiosInstance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            console.log('API response error', error, error.status);
            if(error.status === 401  || error.status === 403){
                console.log('need to log-out', error.status)
                 logOut()
                      .then(() => {
                        // Sign-out successful.
                        navigate("/login")
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Access Denied!!",
                            // footer: '<a href="#">Why do I have this issue?</a>'
                          });
                      }).catch((error) => {
                        // An error happened.
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Sign-out not successful!",
                           
                          });                    
                      });
            }

            return Promise.reject(error);
        });
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;