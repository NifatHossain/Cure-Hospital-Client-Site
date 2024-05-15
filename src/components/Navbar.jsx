import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import { AuthContext } from "../fireBase/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user,userLogOut}=useContext(AuthContext)
    console.log(user);
    const handleLogOut=()=>{
        userLogOut()
        .then(()=>{
            console.log('Successfully Logged Out')
            Swal.fire({
                title: 'Success',
                text: 'Successfully Logged Out',
                icon: 'success',
                confirmButtonText: 'okay'
              })
        })
        .catch((error)=>{
            console.log(error.message)
            Swal.fire({
                title: 'Error',
                text: 'Failed to Log Out',
                icon: 'Error',
                confirmButtonText: 'okay'
              })
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100 border-b-8 border-blue-400">
                <div className="navbar-start relative z-10">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'} className="font-semibold">Home</Link></li>
                        <li><Link to={'/alltreatments'} className="font-semibold">Avilable Treatments</Link></li>
                        <li><Link to={'/blogs'} className="font-semibold">Blogs</Link></li>
                        {/* <li><Link to={`/myitems/${user?.email}`} className="font-semibold">My Art & Craft List</Link></li> */}
                        {
                            user && <div>
                                <li>
                                    <a className="font-semibold">Dashboard</a>
                                    <ul className="p-2">
                                        <li><Link to={`/addtreatments`} className="font-semibold">Add New Treatment</Link></li>
                                        <li><Link to={`/alltreatments/${user?.email}`} className="font-semibold">Show My Services</Link></li>
                                    </ul>
                                </li>
                            </div>
                        }
                        
                    </ul>
                    </div>
                    <Link to={'/'} className="ml-4"><img className="w-1/2" src="https://i.ibb.co/GCcBVt2/Screenshot-2024-05-13-102902.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'} className="font-semibold">Home</Link></li>
                        <li><Link to={'/alltreatments'} className="font-semibold">Avilable Treatments</Link></li>
                        <li><Link to={'/blogs'} className="font-semibold">Blogs</Link></li>
                        {/* <li><Link to={`/myitems/${user?.email}`} className="font-semibold">My Art & Craft List</Link></li> */}
                        {
                            user && <div>
                                <li>
                                    <details>
                                        <summary className="font-semibold">Dashboards</summary>
                                        <ul className="p-2">
                                        <li><Link to={`/addtreatments`} className="font-semibold">Add New Treatment</Link></li>
                                        <li><Link to={`/alltreatments/${user?.email}`} className="font-semibold">Show My Services</Link></li>
                                        </ul>
                                    </details>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end relative z-20">
                    {
                        user && <div>
                            <div id='avater' className="dropdown dropdown-end flex items-center">
                            <button onClick={handleLogOut} className="bg-gray-400 p-2 text-white rounded-md mr-2">Log Out</button>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <img alt="user Image" src={user.photoURL} />
                                    </div>
                                </div>
                                {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Logout</a></li>
                                </ul> */}
                            </div>
                            <Tooltip anchorSelect="#avater" style={{ backgroundColor: "rgb(241 245 249)", color: "#222" }} clickable>
                                <p className="text-center">{user.displayName}</p>
                                 
                            </Tooltip>
                        </div>
                    }
                    {
                        !user && <div>
                             <Link to={'/register'}><button className="bg-gray-400 p-2 text-white rounded-md mr-2">Register</button></Link> 
                             <Link to={'/signin'}><button className="bg-green-400 p-2 text-white rounded-md ">Log In</button></Link> 
                        </div>
                    }
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;