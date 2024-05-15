import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import noData from "../../noDataAdded.json"
import MyToDoCard from "../components/MyToDoCard";

const ServicesToDo = () => {
    const appointments= useLoaderData()
    const length= appointments.length;
    console.log(length)
    if(length<1){
        return <>
            <Lottie className="border-4 w-1/2 mx-auto" animationData={noData} />
            <p className="text-xl font-bold text-center">It seems there is currently no Task </p>
        </>
    }
    return (
        <div className="bg-blue-100 min-h-[100vh] pt-5">
            <Helmet>
                <title>My To Do List</title>
            </Helmet>
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-semibold text-center border-x-8 border-blue-500 p-4 bg-blue-300 mb-7">My To Do List</h2>
        <div className="grid gap-4 grid-cols-3">
            
            {
                
                appointments.map((appointment,idx)=><MyToDoCard key={idx} appointment={appointment}></MyToDoCard >)
            }
        </div>
        </div>
        </div>
    );
};

export default ServicesToDo;