import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

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
                fetch(`http://localhost:5000/myRecommendations/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if (data.deletedCount) {
                            const restMyRecommendations = myRecommendations.filter(q => q._id !== _id)
                            setMyRecommendations(restMyRecommendations);
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your one Recommendation has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="my-20">
            {/* {myRecommendations.length} */}
            <div className="">
            <table className="table table-sm">
    <thead className="text-green-800 bg-purple-200">
      <tr>
        <th>Sl. No.</th>
        <th>Asked by</th>
        <th>Query</th>
        <th>Suggested product</th>
        {/* <th>Image</th> */}
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
                          <td onClick={() => handleDelete(myRecommendation._id)} className="text-red-600"><MdDeleteForever /></td>
                          
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