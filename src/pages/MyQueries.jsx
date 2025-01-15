import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';
import MyQueryCard from '../components/MyQueryCard';
import AddQueryBanner from '../components/addQueryBanner';

const MyQueries = () => {
    const [queries, setQueries] = useState([]);
    const {user} = useContext(AuthContext);
  

    useEffect(()=>{
      fetch(`http://localhost:5000/queries/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQueries(data)
    })
    },[user?.email])

    console.log('my queries:',  user,queries)
    
    return (
        <div>
             {queries.length}
              <br />
              <AddQueryBanner/>
             {/* <Link to="/addQueries" className='btn btn-outline'>add queries</Link> */}
             {
                (queries.length==0)  && <>
                
                <h1>No Queries found!</h1>
                <Link to="/addQueries" className='btn btn-outline'>add queries</Link>
                
                </>
            }
        <div className='md:w-full 
        grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center justify-between py-9'>
        {
            queries?.map((query, index)=><MyQueryCard 
            query={query} 
            queries={queries}
            setQueries={setQueries}
            key={index}/>)
        }
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    );
};

export default MyQueries;