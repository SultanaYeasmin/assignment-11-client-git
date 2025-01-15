import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";

const  QueryUpdate = () => {
    const { user } = useContext(AuthContext);
    const query = useLoaderData()
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, query_date, recommendationCount, _id } = query || {}
   
    const navigate = useNavigate();
    const handleQueryUpdate = e => {
        e.preventDefault();
        const form = e.target
        const product_name = form.productName.value
        const product_brand = form.productBrand.value
        const product_image = form.product_Image_URL.value
        const query_title = form.query_title.value
        const boycotting_reason = form.boycotting_reason.value
        const user_name = user?.displayName;
        const user_email = user?.email;
        const user_image = user?.photoURL;
        // const query_date = new Date().toLocaleString()
        const recommendationCount = 0;

        const updatedQuery = {
            product_name, product_brand,
            product_image, query_title, boycotting_reason,
            user_name, user_email, user_image, recommendationCount
        }
        console.log(updatedQuery);

        fetch(`http://localhost:5000/update-query/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedQuery),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Query has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                }
               //  navigate('/myQueries');
            })
    }

    return (
        <div>
            <h2 className="text-3xl">Update</h2>
            <form onSubmit={handleQueryUpdate} className="card-body">
                {/* Product Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input defaultValue={product_name} type="text"
                     name="productName" placeholder="Product Name" className="input input-bordered" required />
                </div>
                {/* Product Brand */}
                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Product Brand</span>
                    </label>
                    <input defaultValue={product_brand} type="text" name="productBrand" placeholder="Product Brand" className="input input-bordered" required />

                </div>
                {/* Product Image-URL*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image-URL</span>
                    </label>
                    <input defaultValue={product_image} type="text"
                        name="product_Image_URL" placeholder="Product Image-URL" className="input input-bordered" required />
                </div>

                {/* Query TItle */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Query TItle</span>
                    </label>
                    <textarea defaultValue={query_title}
                        name="query_title"
                        className="textarea textarea-bordered" placeholder="Query Title"></textarea>
                </div>
                {/* Boycotting Reason Details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Boycotting Reason Details</span>
                    </label>
                    <textarea defaultValue={boycotting_reason}
                        name="boycotting_reason"
                        className="textarea textarea-bordered" placeholder="Boycotting Reason Details"></textarea>
                </div>

                {/* user name */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">user name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName}
                        name="user_name" className="input input-bordered" required />
                </div> */}
                {/* user EMAIL */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">user email</span>
                    </label>
                    <input type="text" defaultValue={user?.email}
                        name="user_email" className="input input-bordered" required />
                </div> */}
                {/* User’s profile image */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">User profile image</span>
                    </label>
                    <input type="text" defaultValue={user?.photoURL}
                        name="user_image" placeholder="User profile image" className="input input-bordered" required />
                </div> */}
                {/* current Date and Time
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Current Date and Time</span>
                    </label>
                    <input type="text"
                        name="current_date"
                        defaultValue={new Date().toLocaleString()}
                        placeholder="current Date and Time"
                        className="input input-bordered" required />
                </div> */}


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Query</button>
                </div>
            </form>

        </div>
    );
};


export default  QueryUpdate;

