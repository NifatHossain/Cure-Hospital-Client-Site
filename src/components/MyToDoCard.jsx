import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../fireBase/AuthProvider";
import { FaChevronDown } from "react-icons/fa";

const MyToDoCard = ({appointment}) => {
    const {user}= useContext(AuthContext);
    const navigate= useNavigate();
    const {_id,doctorName,date,symptoms,department,fee,location,treatmentId,patientEmail,status,image} = appointment;
    const [newStatus, setNewStatus]= useState('Pending');
    const handleUpdateStatus =(e)=>{
        setNewStatus(e);
        console.log(newStatus);
        const updateStatus= {newStatus}
        fetch(`https://cure-hospital-server.vercel.app/bookedappointment/${_id}`,{
            method:'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateStatus)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text:'Updated information Successfully',
                    icon: 'success',
                    confirmButtonText: 'okay'
                })
                  setTimeout(()=> navigate(`/todo/${user.email}`),2000)
            }
            else{
                Swal.fire({
                    title: 'Error',
                    text:'Data was not updated',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            }
        })
    }
    return (
        <div className="bg-white max-w-80 p-4  rounded-md ">

        <h2 className="text-lg font-bold">{department}</h2>
        <div className="flex flex-col ">
           {/* <Link to={`/carddetails/${_id}`}>
                <div className="max-w-80 mb-20 border cursor-pointer p-5 relative bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
                    <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-60  rounded-lg transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">View Details</span>
                    </div> */}
                    {/* <div className="">
                    <div className=" rounded">
                        <img src={dept_Img} />
                    </div>
                    </div> */}
                      
                    
            <Link to={`/carddetails/${treatmentId}`}>
                <div className=" border cursor-pointer  relative rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
                    <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-60  rounded-lg transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">View Details</span> 
                </div>
                    <div className="flex items-center gap-3 border  bg-slate-200">
                    <div className="avatar">
                        <div className="w-24 rounded">
                        <img src={image} />
                        </div>
                    </div>
                    <div className="bg-slate-200">
                        <p className="font-semibold">{doctorName}</p>
                        {/* <p>{degrees}</p> */}
                        <p>
                        {" "}
                        <span className="font-semibold">Appointment: </span> {fee}
                        </p>
                    </div>
                    </div>
                </div>
            </Link> 
            <div className=" my-3">
                <p><span className="font-bold">Symptoms: </span>{symptoms}</p>
                <p><span className="font-bold">Appointment Date: </span>{date}</p>
                <p><span className="font-bold">Location: </span>{location}</p>
                <p><span className="font-bold">Patient Email: </span>{patientEmail}</p>
                <p className="font-bold"><span className="font-bold">Current Status: </span>{status}</p>
                <div>
                    <p className="font-bold">Update Status: </p>
                    <div className="dropdown">
                    <div tabIndex={0} role="" className="border-2 p-2 rounded-md btn bg-white">Customization Option <FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleUpdateStatus('Pending')}><a>Pending</a></li>
                        <li onClick={()=>handleUpdateStatus('Working')}><a>Working</a></li>
                        <li onClick={()=>handleUpdateStatus('Completed')}><a>Completed</a></li>
                    </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default MyToDoCard;