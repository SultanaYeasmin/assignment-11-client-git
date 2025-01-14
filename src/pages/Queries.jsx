import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../AuthContext/AuthContext';
import MyQueryCard from '../components/MyQueryCard';


const Queries = () => {
    const [queries, setQueries] = useState([]);
    // const {user} = useContext(AuthContext);
  

    useEffect(()=>{
      fetch("http://localhost:5000/queries")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQueries(data)
    })
    },[])
    return (
        <div>
              <div>
             {queries.length}
             {/* <p>{user.displayName}</p> */}
              <br />
             <Link to="/addQueries" className='btn btn-outline'>add queries</Link>
             {
                (queries.length==0)  && <>
                
                <h1>No Queries found!</h1>
                <Link to="/addQueries" className='btn btn-outline'>add queries</Link>
                
                </>
            }
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        {
            queries?.map((query, index)=><MyQueryCard 
            query={query} 
            queries={queries}
            setQueries={setQueries}
            key={index}/>)
        }
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        </div>
    );
};

export default Queries;