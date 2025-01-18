import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";

const RecommendationsForMe = () => {
    const [recommendations, setRecommendations] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/recommendations-for-me/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRecommendations(data)
            }
            )
    }, [user?.email])
    return (
        <div>
           
                {/* {myRecommendations.length} */}
                <div className="container mx-auto px-5 my-10">
                    <table className="table table-sm">
                        <thead className="text-green-800 bg-purple-200">
                            <tr>
                                <th>Sl. No.</th>
                                <th>Recommender</th>
                                <th>My Query</th>
                                <th>Suggested product</th>
                                <th>Image</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        {
                            recommendations?.map((recommendation, index) => <>

                                <tbody>
                                    <tr>
                                        <th className="text-xs">{index + 1}</th>
                                        <td className="text-xs">{recommendation.recommenderEmail}</td>
                                        <td className="text-xs">{recommendation.queryTitle}</td>
                                        <td className="text-xs">{recommendation.recommendationName}</td>
                                        <td className="text-xs"><img className="w-20 h-14" src={recommendation.recommendationImageURL} /></td>
                                        <td className="text-xs">{recommendation.recommendationDate}</td>


                                    </tr>

                                </tbody>
                            </>

                            )
                        }
                    </table>
                </div>
            </div>

      
    );
};

export default RecommendationsForMe;


// const newRecommendation = {
//     recommendationTitle: recommendation_title,
//     recommendationName: recommendation_name,
//     recommendationImageURL: recommendation_Image_URL,
//     recommendationReason: recommendation_reason,
//     queryId: _id,
//     queryTitle: query_title,
//     productName: product_name,
//     userEmailQuery: user_email,
//     userNameQuery: user_name,
//     recommenderEmail: recommender_email,
//     recommenderName: recommender_name,
//     recommenderPhoto: recommender_photo,
//     recommendationDate: current_date,
// }