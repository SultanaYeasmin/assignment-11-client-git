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
            {recommendations.length}
            <div className="grid grid-cols-3 gap-10 ">
                {
                    recommendations.map(x => (<p
                         key={x._id} 
                         className="border-4">{x.recommendationName}</p>))

                }
            </div>
        </div>
    );
};

export default RecommendationsForMe;