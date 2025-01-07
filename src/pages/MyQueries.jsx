import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';

const MyQueries = () => {
    const {user} = useContext(AuthContext);
    const [queries, setQueries] = useState([]);

    useEffect(()=>{
      fetch(`http://localhost:5000/queries?user_email={user?.email}`)
      .then(res => res.json())
      .then(data => console.log(data))



    },[])



    console.log('my queries:',  user)
    
    return (
        <div>


             <Link to="/addQueries" className='btn btn-outline'>add queries</Link>
        </div>
    );
};

export default MyQueries;