import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyTreatmentCard = ({treatment}) => {
    const {
        _id,
        doctorName,
        image,
        department,
        fee
    } = treatment;
    const [deleteClicked, setDeleteClicked]=useState(false);

    const handleDeleteTreatment=()=>{
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://cure-hospital-server.vercel.app/deletetreatment/${_id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount === 1) {
                    // console.log("Successfully deleted one document.");
                    setDeleteClicked(true);
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text:'Data was not updated',
                        icon: 'error',
                        confirmButtonText: 'okay'
                    })
                    // console.log("No documents matched the query. Deleted 0 documents.");
                }
            })
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your file is safe :)",
                icon: "error"
              });
            }
          });
          
    }  
    return (
        <div className={deleteClicked?'hidden':"bg-white max-w-80 p-4  rounded-md "}>

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
                      
                    
            <Link to={`/carddetails/${_id}`}>
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
            <div className="flex gap-4 my-3">
            <Link to={`/updatetreatment/${_id}`} className="px-3 py-3 flex items-center border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white">Update Info</Link>
            <p onClick={handleDeleteTreatment} className="px-3 py-3 flex items-center border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white">Delete</p>
            </div>
        </div>
        </div>
    );
};

export default MyTreatmentCard;