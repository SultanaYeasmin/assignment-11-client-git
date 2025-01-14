

const Recommendation = ({recommendation}) => {
    console.log(recommendation)
    const  {

        recommendation_title,
        recommendation_name,
        recommendation_Image_URL,
        recommendation_reason,
        queryId: id,
        query_title,
        product_name,
        user_email,
        user_name,
        recommender_email,
        recommender_name,
        current_date

    } = recommendation || {}
    return (
        <div>
          
           {current_date}
        </div>
    );
};

export default Recommendation;