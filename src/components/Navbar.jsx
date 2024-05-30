import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../fireBase/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user,userLogOut}=useContext(AuthContext)
    var previousTheme= localStorage.getItem('theme')
    if(!previousTheme){
        previousTheme='light';
    }
    const [theme,setTheme]=useState(previousTheme)
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme=localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleThemeToggle=(e)=>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }
    // console.log(user);
    const handleLogOut=()=>{
        userLogOut()
        .then(()=>{
            // console.log('Successfully Logged Out')
            Swal.fire({
                title: 'Success',
                text: 'Successfully Logged Out',
                icon: 'success',
                confirmButtonText: 'okay'
              })
        })
        .catch(()=>{
            // console.log(error.message)
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
                                        <li><Link to={`/bookedappointments/${user?.email}`} className="font-semibold">Booked Appointments</Link></li>
                                        <li><Link to={`/todo/${user?.email}`} className="font-semibold">Services to do</Link></li>
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
                                        <li><Link to={`/bookedappointments/${user?.email}`} className="font-semibold">Booked Appointments</Link></li>
                                        <li><Link to={`/todo/${user?.email}`} className="font-semibold">Services to do</Link></li>
                                        </ul>
                                    </details>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end relative z-20">
                    <label className="cursor-pointer mr-3 grid place-items-center">
                        <input type="checkbox" onChange={handleThemeToggle}  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
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