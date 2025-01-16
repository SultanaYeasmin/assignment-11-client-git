import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { useLoaderData } from 'react-router-dom';
import AddRecommendation from "../components/AddRecommendation";
import RecommendationsId from "../components/RecommendationsId";

const QueryDetailsCard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const query = useLoaderData();
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, query_date, _id, recommendationCount } = query || {};

    return (
        <div>
            <div>
                <div className="card h-[200px]">

                    <div className="card-body bg-lime-100 place-items-center">
                        <figure className="w-12 h-12">
                            <img className="h-full w-full rounded-full"
                                src={user_image}
                                alt={user_name} />
                        </figure>
                        <h2 className="card-title text-blue-700">User Information</h2>
                        <h2 className="card-title text-sm text-blue-600">{user_name}</h2>
                        <p className="text-xs"><span className="text-slate-500">{user_email}</span></p>

                    </div>
                </div>
                <div className="flex justify-around items-center gap-10 p-5">
                    <figure className="h-[300px] w-1/2">
                        <img className="h-ful w-full"
                            src={product_image}
                            alt={product_name} />
                    </figure>
                    <div className="card-body p-3">
                        <h2 className="card-title text-gray-600">{query_title}</h2>
                      <div className="flex gap-5 justify-between items-center">
                      <h2 className="card-title text-gray-500 text-sm">{product_name}, {product_brand}</h2>
                      <p className="card-title text-gray-500 text-xs">{query_date}</p>
                      </div>
                        {/* <h6 className="card-title">{product_brand}</h6> */}
                        <p className="text-justify w-2/3">Issues: {boycotting_reason}</p>

                       
                        {/* <p>{recommendationCount}</p> */}
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div >

                        {/* <div className="card-actions justify-between">
                            <Link to="/queryDetails">
                                <button className="btn btn-primary">View Details</button>
                            </Link>

                            <Link>  
                             <button className="btn btn-primary">Update</button>
                             </Link>

                            <Link> 
                             <button className="btn btn-primary">Delete</button>
                             </Link>
                        </div> */}
                        <AddRecommendation query={query} />
                        <RecommendationsId />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QueryDetailsCard;