import React from 'react';

const MyRecommendationsTable = ({ myRecommendation }) => {
    console.log(myRecommendation)
    return (
        <div>
            <div className="overflow-x-auto">
            <tbody>

            {/* recommendationTitle,
        recommendationName,
        recommendationImageURL,
        recommendationReason,
        queryId,
        queryTitle,
        productName,
        userEmailQuery,
        userNameQuery,
        recommenderEmail,
        recommenderName,
        recommendationDate,
        recommenderPhoto */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
            </div>
        </div>
    );
};

export default MyRecommendationsTable;