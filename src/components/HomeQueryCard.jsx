


import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../AuthContext/AuthContext';
import { useContext } from 'react';

const HomeQueryCard = ({ query, queries, setQueries }) => {
    let { pathname } = useLocation();
    console.log(pathname)
    const { user, logOut } = useContext(AuthContext);
    const { photoURL, displayName } = user || {};
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, _id,
        query_date, recommendationCount } = query || {}


    return (
        <div className='my-10'>
            <div className="card w-80 card-compact bg-blue-50 shadow-2xl h-[400px] justify-between border border-gray-200 transition-transform duration-300 hover:scale-110">
                <figure className=''>
                    <img className='h-[200px] w-full object-fill p-5 rounded-xl'
                        src={product_image}
                        alt={product_name} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center gap-5'>
                        <div className="">
                            <img className="rounded-full w-12 h-12"
                                src={photoURL} alt="" />
                        </div>
                        <p> 
                            <span className='text-xs text-gray-600'> Asked by: </span>
                            
                          
                            <span className='text-sm text-gray-700 ml-2 font-bold'> {displayName}</span>
                            <br /> 
                           <span className='text-[10px] text-gray-500 font-bold'>
                           {/* <span className='text-xs text-gray-500'> Time: </span> */}
                           {query_date}
                           </span>
                            </p>

                    </div>
                    <h2 className="card-title">{query_title}


                    </h2>
                    <div>

                    </div>
                    <p><span className='font-bold'>Product Name: </span><span className='badge badge-primary'>{product_name}</span></p>
                    <p><span className='font-bold'>Brand: </span><span>{product_brand}</span></p>







                </div>
            </div>

        </div>
    );
};

export default HomeQueryCard;