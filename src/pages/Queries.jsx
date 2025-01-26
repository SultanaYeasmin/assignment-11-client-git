import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../AuthContext/AuthContext';
import MyQueryCard from '../components/MyQueryCard';
// import Search from '../components/Search';
import img123 from "../assets/images/search.jpg"

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [gridLayout, setGridLayout] = useState(3);
    // const {user} = useContext(AuthContext);
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://assignment-11-server-side-xi.vercel.app/queries?search=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setQueries(data)
            })
    }, [search])
    console.log(search, gridLayout)
    return (
        <div className='mb-10'>
            <div style={{ backgroundImage: `url(${img123})` }} className="bg-cover bg-center h-[60vh]">
                <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
                    <div className='text-center'>
                        <h1 className="text-xl md:text-4xl font-bold mb-3  px-10  text-white">
                            Have a Question?
                        </h1>

                        <p className="text-white text-sm md:text-base font-bold mb-7 italic px-5 md:px-10 ">If you have any queries, feel free to ask or type in what you're looking for!</p>

                        {/* <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e => setSearch(e.target.value)}
                                value={search}
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button 
                            className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div> */}
                        <div className="join flex items-center  px-10">
                            <input
                                className="input input-bordered join-item flex-1 px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-300"
                                placeholder="Type your query"
                                aria-label="Type your query"
                                type="text"
                                name="search"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <button
                                className="btn join-item rounded-r-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-green-300"
                                aria-label="Search button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='my-10 flex justify-end pr-10'>
                <div className="join hidden lg:block lg:join-horizontal">
                    <button onClick={() => setGridLayout(1)} className="btn duration-300 border-none join-item bg-blue-200 hover:bg-blue-100 transition-colors">Col-1</button>
                    <button onClick={() => setGridLayout(2)} className="btn duration-300 border-none join-item bg-blue-400 hover:bg-blue-300 transition-colors">Col-2</button>
                    <button onClick={() => setGridLayout(3)} className="btn duration-300 border-none join-item bg-blue-600 hover:bg-blue-500 transition-colors">Col-3</button>
                </div>


            </div>
            <div>
              
                {/* {
                    (queries.length == 0) && <>

                        <h1>No Queries found!</h1>
                        <Link to="/addQueries" className='btn btn-outline'>add queries</Link>

                    </>
                } */}
                <div className={`grid 
                ${gridLayout === 1 ? 'lg:grid-cols-1' : ''}
               ${gridLayout === 2 ? 'lg:grid-cols-2' : ''}
                ${gridLayout === 3 ? 'lg:grid-cols-3' : ''}
              md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-10`}>
                    {
                        queries?.map((query, index) => <MyQueryCard
                            query={query}
                            queries={queries}
                            setQueries={setQueries}
                            key={index} />)
                    }
                </div>
           </div>
        </div>
    );
};

export default Queries;