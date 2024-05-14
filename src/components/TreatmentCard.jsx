const TreatmentCard = () => {
  return (
    <div>
      <div className="max-w-80 mb-20 border p-5 relative bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
        <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-60  rounded-lg transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-bold">View Details</span>
        </div>
        <div>
          <img src="https://i.ibb.co/sCDW3Kn/portfolio-new-15.jpg" alt="" />
        </div>
        <h2 className="text-lg font-bold">Diabetic Treatment</h2>
        <div className="flex items-center gap-3 border  bg-slate-200">
          <div>
            <img className="rounded-lg" src="https://i.ibb.co/vhQgrL1/dr-Rashed-Mahmud.jpg" alt="" />
          </div>
          <div className="bg-slate-200">
            <p className="font-semibold">Dr. Ranjit Kumar Mistri</p>
            <p>MBBS,BCS(Health),specil training in Singapore</p>
            <p>Appointment: 1000tk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
