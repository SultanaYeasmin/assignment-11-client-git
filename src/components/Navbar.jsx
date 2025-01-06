import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
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

      <div className="navbar bg-base-100 container mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li>
                <Link to="/queries">Queries</Link>

              </li>
              {user &&
                <>
                  <li><Link to="/recommendationsForMe">Recommendations For Me</Link></li>
                  <li><Link to="/myQueries">My Queries</Link></li>
                  <li><Link to="/myRecommendations">My recommendations</Link></li>
                </>
              }

            </ul>
          </div>
          
          <a className='btn btn-ghost text-2xl text-blue-400
                            flex items-center gap-1'>
                                <FaQuestionCircle/> QueryNest </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li>
                <Link to="/queries">Queries</Link>

              </li>

            {
              user &&
              <>
               <li><Link to="/recommendationsForMe">Recommendations For Me</Link></li>
                  <li><Link to="/myQueries">My Queries</Link></li>
                  <li><Link to="/myRecommendations">My recommendations</Link></li>
              </>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <div data-tooltip-id="my-tooltip-1" className="flex items-center gap-1 ">
                <div className="">
                  <img className="rounded-full w-12 h-12 mr-3" src={photoURL} />
                  
                </div>
                <Tooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content={displayName}
                  />
                <button className="btn btn-primary" onClick={handleSignOut}>log out</button>
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