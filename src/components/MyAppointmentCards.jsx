import { Link } from "react-router-dom";


const MyAppointmentCards = ({appointment}) => {
    const {doctorName,date,symptoms,department,fee,location,treatmentId,secviceAdderEmail,image} = appointment;
    return (
        <div className="bg-white max-w-80 p-4  rounded-md border-2">

        <h2 className="text-lg font-bold text-black">{department}</h2>
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
                        <p className="font-semibold text-black">{doctorName}</p>
                        {/* <p>{degrees}</p> */}
                        <p className="text-black">
                        {" "}
                        <span className="font-semibold">Appointment: </span> {fee}
                        </p>
                    </div>
                    </div>
                </div>
            </Link> 
            <div className=" my-3">
                <p className="text-black"><span className="font-bold">Symptoms: </span>{symptoms}</p>
                <p className="text-black"><span className="font-bold">Appointment Date: </span>{date}</p>
                <p className="text-black"><span className="font-bold">Location: </span>{location}</p>
                <p className="text-black"><span className="font-bold">Contact: </span>{secviceAdderEmail}</p>
                
            </div>
        </div>
        </div>
    );
};

export default MyAppointmentCards;