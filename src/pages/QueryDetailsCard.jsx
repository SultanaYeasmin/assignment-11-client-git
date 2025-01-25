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
        user_name, user_email, user_image, query_date,
        _id, recommendationCount } = query || {};

    return (
        <div className="container mx-auto my-10">
                  <div className="flex flex-col md:flex-row mt-5 justify-between gap-10 items-baseline">
                <div className="md:w-[40%] w-full bg-blue-50">
                <div className="">
                <div className="card h-[200px]">
                    <div className="card-body place-items-start">
                        <h2 className="text-base font-bold text-blue-700">User Info:</h2>
                        <figure className="w-12 h-12">
                            <img className="h-full w-full rounded-full"
                                src={user_image}
                                alt={user_name} />
                        </figure>
                        <h2 className="card-title text-sm text-blue-600">{user_name}</h2>
                        <p className="text-xs"><span className="text-slate-500">{user_email}</span></p>
                    </div>
                </div>
            </div>
                    <figure className="h-[100px] flex justify-center">
                        <img className="h-full rounded-sm"
                            src={product_image}
                            alt={product_name} />
                    </figure>
                    <div className="card-body p-3">
                        <h2 className="card-title text-blue-600 text-base">{query_title}</h2>
                       
                            <h2 className="card-title text-gray-500 text-sm">{product_name}, {product_brand}</h2>
                            <p className="card-title text-gray-500 text-[10px]">{query_date}</p>
                      
                        {/* <h6 className="card-title">{product_brand}</h6> */}
                        <p className="text-justify w-[90%] text-xs"><span className="text-blue-800 
                                                font-extrabold">Problems:</span> {boycotting_reason}</p>
                        {/* <p>{recommendationCount}</p> */}
                    </div>
                </div>
                <div className="w-full md:w-2/3 bg-blue-50">
                    <AddRecommendation query={query} />
                </div>
            </div>
            <div >
                <RecommendationsId />
            </div>
        </div>
    );
};

export default QueryDetailsCard;