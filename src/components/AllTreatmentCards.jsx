import { useState } from "react";
import TreatmentCard from "./TreatmentCard";
import { Link } from "react-router-dom";

const AllTreatmentCards = () => {
  const [alltreatments, setTreatments] = useState([]);
  fetch("https://cure-hospital-server.vercel.app/alltreatments")
    .then((res) => res.json())
    .then((data) => setTreatments(data));
  const treatments = alltreatments.slice(0, 6);
  return (
    <div>
      <h2 className="text-3xl font-semibold border-l-8 border-blue-500 p-4 bg-blue-100 my-6 ">
        Our Treatments
      </h2>
      <div className="grid gap-5 grid-cols-3">
        {treatments.map((treatment, idx) => (
          <TreatmentCard key={idx} treatment={treatment}></TreatmentCard>
        ))}
      </div>
      <div className="flex gap-12 border-l-8 border-blue-500 p-4 bg-blue-100">
        <div>
            <h1 className="text-2xl font-bold">We have World class Specialized Doctors</h1>
            <p className="text-lg font-medium">Find All doctor here</p>
        </div>
        <Link to={'/alltreatments'} className="px-3 py-3 flex items-center border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white">Show All</Link>
      </div>
    </div>
  );
};

export default AllTreatmentCards;
