import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyRecommendations = () => {
    const [myRecommendations, setMyRecommendations] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // useEffect(() => {
    //     fetch(`http://localhost:5000/recommendations?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setMyRecommendations(data)
    //         }
    //         )
    // }, [user?.email])

    useEffect(() => {
        axiosSecure.get(`/recommendations?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setMyRecommendations(res.data)
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
        <div className="my-10 container mx-auto px-5">
            {/* {myRecommendations.length} */}
            <div className="">
                <table className="table table-sm">
                    <thead className="text-green-800 bg-blue-200">
                        <tr>
                            <th>Sl. No.</th>
                            <th className="hidden md:table-cell">Asked by</th>
                            <th>Query</th>
                            <th>My Suggested product</th>
                            {/* <th>Image</th> */}
                            <th className="hidden md:table-cell">Date</th>
                            <th>Remarks</th>

                        </tr>
                    </thead>
                    {
                        myRecommendations.map((myRecommendation, index) => <>

                            <tbody>
                                <tr>
                                    <th className="text-xs">{index + 1}</th>
                                    <td className="text-xs hidden md:table-cell">{myRecommendation.userEmailQuery}</td>
                                    <td className="text-xs">{myRecommendation.queryTitle}</td>
                                    <td className="text-xs">{myRecommendation.recommendationName}</td>
                                    <td className="text-xs hidden md:table-cell">{myRecommendation.recommendationDate}</td>
                                    <td onClick={() => handleDelete(myRecommendation._id)} className="text-red-600">
                                        <div className="flex justify-center items-center">
                                        <MdDeleteForever className="lg:text-xl md:text-base text-xs" />
                                        </div>
                        
                                    </td>

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