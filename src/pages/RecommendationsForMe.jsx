import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RecommendationsForMe = () => {
    const [recommendations, setRecommendations] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/recommendations-for-me/${user?.email}`)
            .then(res =>  {
                console.log(res.data)
                setRecommendations(res.data)
            }
            )
    }, [user?.email])
    return (
        <div className="container mx-auto">
           {
             recommendations && <>
             
              {/* {myRecommendations.length} */}
              <div className="px-5 my-10">
                    <table className="table table-sm">
                        <thead className="text-gray-800 bg-blue-200">
                            <tr>
                                <th>Sl. No.</th>
                                <th className="hidden md:table-cell">Recommender</th>
                                <th>My Query</th>
                                <th>Suggested product</th>
                                <th className="hidden md:table-cell">Image</th>
                                <th className="hidden md:table-cell">Date</th>
                            </tr>
                        </thead>
                        {
                            recommendations?.map((recommendation, index) => <>

                                <tbody>
                                    <tr>
                                        <th className="text-xs">{index + 1}</th>
                                        <td className="text-xs hidden md:table-cell">{recommendation.recommenderEmail}</td>
                                        <td className="text-xs">{recommendation.queryTitle}</td>
                                        <td className="text-xs">{recommendation.recommendationName}</td>
                                        <td className="text-xs hidden md:table-cell"><img className="w-20 h-14" src={recommendation.recommendationImageURL} /></td>
                                        <td className="text-xs hidden md:table-cell">{recommendation.recommendationDate}</td>


                                    </tr>

                                </tbody>
                            </>

                            )
                        }
                    </table>
                </div>
             </> 

           }
               
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