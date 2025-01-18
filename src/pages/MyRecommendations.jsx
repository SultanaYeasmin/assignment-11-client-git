import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import MyRecommendationsTable from "../components/myRecommendationsTable";

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
            {/* {myRecommendations.length} */}
            <div className="">
            <table className="table table-sm">
    <thead>
      <tr>
        <th>Sl. No.</th>
        <th>User</th>
        <th>Query</th>
        <th>Suggested product</th>
        <th>Date</th>
        <th>Remarks</th>
       
      </tr>
    </thead>
    
    
 
                {
                    myRecommendations.map((myRecommendation, index) => <>
                   
                        <tbody>
                        <tr>
                          <th className="text-xs">{index + 1}</th>
                          <td className="text-xs">{myRecommendation.userEmailQuery}</td>
                          <td className="text-xs">{myRecommendation.queryTitle}</td>
                          <td className="text-xs">{myRecommendation.recommendationName}</td>
                          <td className="text-xs">{myRecommendation. recommendationDate}</td>
                          <td className="text-xs">X</td>
                          
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

export default MyRecommendations;

// recommendationTitle,
//         recommendationName,
//         recommendationImageURL,
//         recommendationReason,
//         queryId,
//         queryTitle,
//         productName,
//         userEmailQuery,
//         userNameQuery,
//         recommenderEmail,
//         recommenderName,
//         recommendationDate,
//         recommenderPhoto