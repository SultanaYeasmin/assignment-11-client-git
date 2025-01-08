
import { Link } from 'react-router-dom';
const MyQueryCard = ({ query }) => {
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, _id,
         query_date, recommendationCount } = query || {}

    return (
        <div>
            <div className="card 
            card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt={product_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{query_title}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/query/${_id}`}> 
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                        <Link>  
                         <button className="btn btn-primary">Update</button>
                         </Link>
                        <Link> 
                         <button className="btn btn-primary">Delete</button>
                         </Link>
                       
                     
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyQueryCard;