import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";


const MyRecommendations = () => {
    const [myRecommendations, setMyRecommendations] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/recommendations?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyRecommendations(data)
            }
            )
    }, [user?.email])



    return (
        <div>
            {myRecommendations.length}
            <div className="grid grid-cols-3 gap-10 ">
                {
                    myRecommendations.map(x => <p className="border-4">{x.queryId}</p>)
                    
                }
            </div>
        </div>
    );
};

export default MyRecommendations;