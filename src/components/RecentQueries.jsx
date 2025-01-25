import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../AuthContext/AuthContext';

import HomeQueryCard from './HomeQueryCard';


const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    // const {user} = useContext(AuthContext);


    useEffect(() => {
        fetch("http://localhost:5000/queries-six")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setQueries(data)
            })
    }, [])
    return (
        <div className='my-10 container mx-auto'>
            <h1 className='text-center text-3xl text-blue-600 py-2 font-extrabold'>Recent Queries!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-5'>
                {
                    queries?.map((query, index) => <HomeQueryCard
                        query={query}
                        queries={queries}
                        setQueries={setQueries}
                        key={index} />)
                }
            </div>
        </div >
    );
};

export default RecentQueries;