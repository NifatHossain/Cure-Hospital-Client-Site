import { Link, useLoaderData } from "react-router-dom";


const CardDetailsPage = () => {
    const details= useLoaderData()
    const {_id,doctorName,image, degrees,department, dept_Img, location, fee, serviceAdderName, secviceAdderEmail,serviceAdderImage}= details;
    return (
        <div className="bg-blue-100 py-7">
        <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">Appointment Details</h2>
             <div className="flex flex-col-reverse md:flex-row gap-3">
            <div>
                <div className="space-y-3">
                    <p className="text-xl font-bold">Department Name: {department}</p>
                    <img className="w-1/2" src={dept_Img} alt="" />
                    <div className="flex flex-col">
                        <div className="avatar">
                            <div className="w-24 rounded">
                            <img src={serviceAdderImage} />
                            </div>
                        </div>
                        <p className="font-semibold">{serviceAdderName}</p>
                        <p className="font-semibold">Email: {secviceAdderEmail}</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-bold">Doctors Information</h2>
                <div className="avatar">
                    <div className="w-28 rounded">
                    <img src={image} />
                    </div>
                </div>
                <p className="text-xl font-semibold">{doctorName}</p>
                <p><span className=" font-semibold">Qualifications: </span>{degrees}</p>
                <p><span className=" font-semibold">Address: </span> {location}</p>
                <p className=" font-semibold">Appointment fee: {fee}</p>
                <Link to={`/bookappointment/${_id}?email=${secviceAdderEmail}`} className="px-3 font-bold py-3 max-w-44 flex items-center border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white">Book Appointment</Link>

            </div>
            </div>
        </div>
        </div>
    );
};

export default CardDetailsPage;