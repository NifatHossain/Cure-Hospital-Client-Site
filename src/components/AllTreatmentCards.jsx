import { useState } from "react";
import TreatmentCard from "./TreatmentCard";


const AllTreatmentCards = () => {
    const [alltreatments,setTreatments]=useState([])
    fetch('http://localhost:5000/alltreatments')
    .then(res=>res.json())
    .then(data=>setTreatments(data))
    const treatments= alltreatments.slice(0,6);
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-6">Our Treatments</h2>
        <div className="grid grid-cols-3">
            
            {
                treatments.map((treatment,idx)=><TreatmentCard key={idx} treatment={treatment}></TreatmentCard>)
            }
        </div>
        </div>
    );
};

export default AllTreatmentCards;