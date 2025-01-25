import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { FaQuestionCircle } from "react-icons/fa";



const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  // console.log(user)
  const { photoURL, displayName } = user || {};
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/login")
        Swal.fire({
          title: "Wow!",
          text: "Sign-out successful!",
          icon: "success"
        });
      }).catch((error) => {
        // An error happened.
        alert("Sign-out not successful.", error)
      });
  }
  return (
    <div>

      <div className="navbar bg-[#1E90FF] px-10 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
             bg-[#1E90FF] text-white rounded-box z-30 mt-3 w-52 p-2 shadow">
              <li className=""><NavLink to="/">Home</NavLink></li>
              <li>
                <NavLink  to="/queries">Queries</NavLink>

              </li>
              {user &&
                <>
                  <li><NavLink  to="/recommendationsForMe">Recommendations for me</NavLink></li>
                  <li><NavLink  to="/myQueries">My Queries</NavLink></li>
                  <li><NavLink  to="/myRecommendations">My Recommendations</NavLink></li>
                </>
              }

            </ul>
          </div>
          
          <a className='btn btn-ghost text-sm md:text-base lg:text-xl text-white flex items-center gap-1  transition-colors hover:bg-[#87cefa86] duration-300'>
                                <FaQuestionCircle/> QueryNest </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink  to="/">Home</NavLink></li>
            <li>
                <NavLink  to="/queries">Queries</NavLink>

              </li>

            {
              user &&
              <>
               <li><NavLink  to="/recommendationsForMe">Recommendations for me</NavLink></li>
                  <li><NavLink  to="/myQueries">My Queries</NavLink></li>
                  <li><NavLink  to="/myRecommendations">My Recommendations</NavLink></li>
              </>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <div data-tooltip-id="my-tooltip-1" className="flex items-center gap-1 ">
                <div className="">
                  <img className="rounded-full w-12 h-12 mr-3" 
                  src={photoURL} alt="" />
                  
                </div>
                <Tooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content={displayName}
                  />
                <button 
                className="btn bg-[#1E90FF] hover:bg-[#87cefa86] transition-colors duration-300 text-white border-none" onClick={handleSignOut}>Log out</button>
              </div>

              :
              <Link to="/login" className="btn">Login</Link>
          }

          {/* <Link to="registration" className="btn">Signup</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;