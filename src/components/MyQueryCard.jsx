
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryCard = ({ query, queries, setQueries }) => {
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, _id,
        query_date, recommendationCount } = query || {}

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/query/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if (data.deletedCount) {
                            const restQueries = queries.filter(q => q._id !== _id)
                            setQueries(restQueries);
                            console.log(queries);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='px-5'>
                    {
            queries && <> 
            <div className="card w-80
            card-compact bg-base-100 shadow-xl h-[400px] justify-between">
                <figure className='h-[380px]'>
                    <img className='h-full w-full'
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
                        <Link to={`/query/update/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>


                    </div>
                </div>
            </div>
            </>
           }
        </div>
    );
};

export default MyQueryCard;