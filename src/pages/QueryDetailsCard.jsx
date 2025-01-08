

import { Link, useLoaderData } from 'react-router-dom';

const QueryDetailsCard = () => {
    const query = useLoaderData()
    const { product_name, product_brand,
        product_image, query_title, boycotting_reason,
        user_name, user_email, user_image, query_date, recommendationCount } = query || {}
    return (
      
    );
};

export default QueryDetailsCard;