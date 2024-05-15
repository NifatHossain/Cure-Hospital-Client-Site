import { Link } from "react-router-dom";


const MyTreatmentCard = ({treatment}) => {
    const {
        _id,
        doctorName,
        image,
        department,
        fee
      } = treatment;
    return (
        <div className="bg-white max-w-80 p-4  rounded-md">

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
            <Link to={'/alltreatments'} className="px-3 py-3 flex items-center border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white">Update Info</Link>
            <Link to={'/alltreatments'} className="px-3 py-3 flex items-center border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white">Delete</Link>
            </div>
        </div>
        </div>
    );
};

export default MyTreatmentCard;