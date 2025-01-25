import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';
import MyQueryCard from '../components/MyQueryCard';
// import AddQueryBanner from '../components/addQueryBanner';
import NoQueryMsg from '../components/NoQueryMsg';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AddQueryBanner from '../components/AddQueryBanner';

const MyQueries = () => {
    const [queries, setQueries] = useState([]);
    const { user } = useContext(AuthContext);
    
    const axiosSecure = useAxiosSecure();

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/queries/${user?.email}`,
    //      {withCredentials:true})
    //         .then(res =>  {
    //             console.log(res.data);
    //             setQueries(res.data)
    //         })
    // }, [user?.email])

    useEffect(() => {
        axiosSecure.get(`/queries/${user?.email}`)
            .then(res =>  {
                console.log(res.data);
                setQueries(res.data)
            })
    }, [user?.email])

    console.log('my queries:', user, queries)

    return (
        <div>
            {/* {queries.length}
            <br /> */}
            {
                (queries.length > 0) && <>
                    <AddQueryBanner />
                </>
            }
            {/* <Link to="/addQueries" className='btn btn-outline'>add queries</Link> */}
            {
                (queries.length == 0) && <>
                    <NoQueryMsg />
                </>
            }
            <div className='md:w-full 
        grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center justify-between py-9'>
                {
                    queries?.map((query, index) => <MyQueryCard
                        query={query}
                        queries={queries}
                        setQueries={setQueries}
                        key={index} />)
                }
            </div>
        </div>
    );
};

export default MyQueries;