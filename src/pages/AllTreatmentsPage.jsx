import { useLoaderData } from "react-router-dom";
import TreatmentCard from "../components/TreatmentCard";
import { Helmet } from "react-helmet";


const AllTreatmentsPage = () => {
    const allTreatments= useLoaderData()
    return (
        <div className=" pt-5">
            <Helmet>
                <title>All Available Treatments</title>
            </Helmet>
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">Our Treatments</h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                allTreatments.map((treatment,idx)=><TreatmentCard key={idx} treatment={treatment}></TreatmentCard>)
            }
        </div>
        </div>
        </div>
    );
};

export default AllTreatmentsPage;