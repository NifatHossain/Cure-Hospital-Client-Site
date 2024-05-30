import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MyAppointmentCards from "../components/MyAppointmentCards";
import Lottie from "lottie-react";
import noData from "../../noDataAdded.json"

const BookedAppointments = () => {
    const appointments= useLoaderData();
    const length= appointments.length;
    console.log(length)
    if(length<1){
        return <>
            <Lottie className="border-4 w-1/2 mx-auto" animationData={noData} />
            <p className="text-xl font-bold text-center">It seems you did not add anything</p>
        </>
    }
    return (
        <div className=" min-h-[100vh] pt-5">
            <Helmet>
                <title>My Appointments</title>
            </Helmet>
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">My Services</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                
                appointments.map((appointment,idx)=><MyAppointmentCards key={idx} appointment={appointment}></MyAppointmentCards>)
            }
        </div>
        </div>
        </div>
    );
};

export default BookedAppointments;