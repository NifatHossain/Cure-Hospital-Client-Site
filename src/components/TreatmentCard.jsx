const TreatmentCard = ({ treatment }) => {
  const {
    doctorName,
    image,
    degrees,
    department,
    dept_Img,
    location,
    fee,
    serviceAdderName,
    secviceAdderEmail,
    serviceAdderImage,
  } = treatment;
  return (
    <div>
      <div className="max-w-80 mb-20 border cursor-pointer p-5 relative bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
        <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-60  rounded-lg transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-xl font-bold">View Details</span>
        </div>
        <div className="">
          <div className=" rounded">
            <img src={dept_Img} />
          </div>
        </div>
        <h2 className="text-lg font-bold">{department}</h2>
        <div className="flex items-center gap-3 border  bg-slate-200">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} />
            </div>
          </div>
          <div className="bg-slate-200">
            <p className="font-semibold">{doctorName}</p>
            <p>{degrees}</p>
            <p>
              {" "}
              <span className="font-semibold">Appointment: </span> {fee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
