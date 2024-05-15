import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MyAppointmentCards from "../components/MyAppointmentCards";


const BookedAppointments = () => {
    const appointments= useLoaderData();
    return (
        <div className="bg-blue-100 min-h-[100vh] pt-5">
            <Helmet>
                <title>My Appointments</title>
            </Helmet>
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">My Services</h2>
        <div className="grid gap-4 grid-cols-3">
            
            {
                appointments.map((appointment,idx)=><MyAppointmentCards key={idx} appointment={appointment}></MyAppointmentCards>)
            }
        </div>
        </div>
        </div>
    );
};

export default BookedAppointments;