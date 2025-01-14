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
        user_name, user_email, user_image, query_date, _id,recommendationCount } = query || {};
          
    return (
        <div>
            <div>
                <p>{_id}</p>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={product_image}
                            alt={product_name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{query_title}</h2>
                        <h2 className="card-title">{product_name}</h2>
                        <h6 className="card-title">{product_brand}</h6>
                        <p>{boycotting_reason}</p>
                        <p>{user_name}</p>
                        <p>{user_email}</p>
                        <p>{user_image}</p>
                        <p>{query_date}</p>
                        <p>{recommendationCount}</p>
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
                        <AddRecommendation query={query}/>
                        <RecommendationsId />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default QueryDetailsCard;