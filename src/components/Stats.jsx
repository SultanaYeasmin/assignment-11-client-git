
import img11 from "../assets/images/members1.png"
import img12 from "../assets/images/query.jpg"
import img13 from "../assets/images/sol.jpg"
import imgOnline from "../assets/images/online.jpg"



const Stats = () => {
    return (
        <>
            <div className="mb-20">
                {/* <h1 className='text-3xl text-center font-extrabold pb-10 text-blue-600'>Statistics!</h1> */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center bg-black text-white">
                    {/* <div className="flex justify-start items-center"> */}
                    <div className="flex md:p-5 p-2 flex-col items-center justify-center">
                        <div className="w-full flex justify-center"> <img src={img11} alt="members" className="mb-2 lg:w-20 lg:h-20 w-10 h-10 md:w-16 md:h-16 rounded-lg transition-transform duration-300 hover:scale-110" /></div>
                        <h1 className="lg:text-2xl text-xl font-extrabold text-center">4000+</h1>
                        <p className="text-sm text-gray-200">Members</p>
                    </div>

                    <div className="flex md:p-5 p-2 flex-col  items-center justify-center">
                        <div className="w-full flex justify-center">
                            <img src={img12} alt="queries" className="mb-2 lg:w-20 lg:h-20 w-10 h-10 md:w-16 md:h-16 rounded-lg transition-transform duration-300 hover:scale-110" />
                        </div>
                        <h1 className="lg:text-2xl text-xl font-extrabold text-center">3000+</h1>
                        <p className="text-sm text-gray-200">Queries</p>

                    </div>

                    <div className="flex md:p-5 p-2 flex-col items-center justify-center ">

                        <div className="w-full flex justify-center">
                            <img src={img13} alt="recommendation" className="lg:w-20 lg:h-20 w-10 h-10 md:w-16 md:h-16 mb-2 rounded-lg transition-transform duration-300 hover:scale-110" />
                        </div>
                        <h1 className="lg:text-2xl text-xl font-extrabold text-center">2500+</h1>
                        <p className="text-sm text-gray-200">Recommendations</p>
                    </div>

                    <div className="flex md:p-5 p-2 flex-col items-center justify-center ">
                        <div className="w-full flex justify-center">
                            <img src={imgOnline} alt="online" 
                            className="lg:w-20 lg:h-20 w-10 h-10 md:w-16 md:h-16 mb-2 rounded-lg transition-transform duration-300 hover:scale-110" />
                        </div>
                        <h1 className="lg:text-2xl text-xl font-extrabold text-center">2000+</h1>
                        <p className="text-sm text-gray-200">Online</p>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Stats;

// const Stats = () => {
//     return (
//         <div className="grid grid-cols-3 justify-around items-center bg-black text-white gap-10 py-10 my-20">
//             {/* <div className="flex justify-start items-center"> */}
//                 <div className="flex p-10 flex-col  items-center gap-5 justify-center">
//                     {/* <div className="">
//                     <FaUsers className="" />
//                     </div> */}
//                     <div>
//                    <div> <img src={img11} alt=""  className="w-20 h-24 /></div>
//                         <h1 className="lg:text-2xl text-lg font-extrabold text-center">4000+</h1>
//                         <p className="text-sm">Members</p>
//                     </div>
//                 </div>
//                 <div className="flex p-10 flex-col  items-center gap-5 justify-center">
//                     {/* <div>
//                     <FaQuestionCircle />
//                     </div> */}
//                     <div>
//                  <div>
//                  <img src={img12} alt=""  className="w-20 h-24 />
//                  </div>
//                         <h1 className="lg:text-2xl text-lg font-extrabold text-center">3000+</h1>
//                         <p className="text-sm">Queries</p>
//                     </div>
//                 </div>
//                 <div className="flex p-10 flex-col items-center gap-5 justify-center">
//                     {/* <div>
//                     <VscCommentDiscussion />
//                     </div> */}
//                     <div>
//                  <div>
//                  <img src={img13} alt=""  className="mb-3 w-20 h-24 />
//                  </div>
//                         <h1 className="lg:text-2xl text-lg font-extrabold text-center">2500+</h1>
//                         <p className="text-sm">Recommendations</p>
//                     </div>
//                 </div>
//                 {/* <div className="flex p-10 flex-col items-center gap-5 justify-center">
//                     <div>
//                     <VscCommentDiscussion />
//                     </div>
//                     <div>
//                         <h1 className="lg:text-2xl text-lg font-extrabold text-center">250</h1>
//                         <p className="text-sm">Recommendations</p>
//                     </div>
//                 </div> */}
//             {/* </div> */}
//             {/* <div className="">
//                 <button className="btn lg:btn-wide btn-md rounded-3xl text-sm text-white hover:bg-cyan-400 bg-black">Start a query!</button>
//             </div> */}
//         </div>
//     );
// };