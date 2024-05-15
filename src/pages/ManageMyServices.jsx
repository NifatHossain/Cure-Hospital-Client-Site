import { useLoaderData } from "react-router-dom";
import MyTreatmentCard from "../components/MyTreatmentCard";
import { Helmet } from "react-helmet";


const ManageMyServices = () => {
    const myServices=useLoaderData();

    return (
        <div className="bg-blue-100 min-h-[100vh] pt-5">
            <Helmet>
                <title>Manage My Services</title>
            </Helmet>
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">My Services</h2>
        <div className="grid gap-4 grid-cols-3">
            
            {
                myServices.map((treatment,idx)=><MyTreatmentCard key={idx} treatment={treatment}></MyTreatmentCard>)
            }
        </div>
        </div>
        </div>
    );
};

export default ManageMyServices;