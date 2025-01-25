import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommendation from "./Recommendation";

const RecommendationsId = () => {

    const [recommendations, setRecommendations] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/recommendations/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecommendations(data);
            })
    }, [])

    console.log(recommendations);

    return (
        <div className="my-10 container mx-auto">
            <p className="text-gray-600 my-5 p-5 bg-blue-50">Available suggestions: {recommendations.length}</p>
            {
                recommendations?.map((recommendation) => <Recommendation
                    key={recommendation._id}
                    recommendation={recommendation}
                />
                )
            }
        </div>
    );
};

export default RecommendationsId;