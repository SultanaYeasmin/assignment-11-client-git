import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import RecommendationsId from "./RecommendationsId";

const AddRecommendation = ({ query }) => {
    // const [queryForId, setQuery] = useState([])
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, query_date, _id, recommendationCount } = query || {};

    // useEffect(() => {
    //     fetch(`http://localhost:5000/query/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setQuery(data)
    //         })
    // }, [id])

    // const { product_name, product_brand,
    //     product_image, query_title, boycotting_reason,
    //     user_name, user_email, user_image, query_date, _id, recommendationCount } = queryForId || {};

    const handleAddRecommendation = e => {
        e.preventDefault();
        const form = e.target;
        const recommendation_name = form.recommendationName.value;
        const recommendation_Image_URL = form.recommendation_Image_URL.value;
        const recommendation_title = form.recommendation_title.value;
        const recommendation_reason = form.recommendation_reason.value;
        const recommender_name = user?.displayName;
        const recommender_email = user?.email;
        const current_date = new Date().toLocaleString()

        const newRecommendation = {
            recommendationTitle:recommendation_title,
            recommendationName:recommendation_name,
            recommendationImageURL:recommendation_Image_URL,
            recommendationReason:recommendation_reason,
            queryId: id,
            queryTitle: query_title,
            productName: product_name,
            userEmailQuery: user_email,
            userNameQuery: user_name,
            recommenderEmail:recommender_email,
            recommenderName:recommender_name,
            recommendationDate: current_date,
        }

        console.log(newRecommendation);
        fetch('http://localhost:5000/add-recommendation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRecommendation),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "new Recommendation has been added",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // navigate('/myQueries');
                }

            })
    }

    return (
        <div>
            <form onSubmit={handleAddRecommendation} className="card-body">

                {/* Recommendation TItle */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recommendation TItle</span>
                    </label>
                    <textarea
                        name="recommendation_title"
                        className="textarea textarea-bordered"
                        placeholder="Recommendation Title"></textarea>
                </div>

                {/* Recommendation Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recommended product Name</span>
                    </label>
                    <input
                        type="text" name="recommendationName"
                        placeholder="Recommended Product Name"
                        className="input input-bordered" required />
                </div>

                {/* Recommendation Image-URL*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recommendation Product Image</span>
                    </label>
                    <input type="text"
                        name="recommendation_Image_URL" placeholder="Recommendation Product Image" className="input input-bordered" required />
                </div>

                {/* Recommendation reason Details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recommendation reason</span>
                    </label>
                    <textarea
                        name="recommendation_reason"
                        className="textarea textarea-bordered"
                        placeholder="Recommendation reason"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Recommendation</button>
                </div>
            </form>
            <RecommendationsId />
        </div>
    );

};

export default AddRecommendation;