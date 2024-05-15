import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../fireBase/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const BookAppointment = () => {
    const appointmentDetails= useLoaderData();
    const {_id,doctorName,department, dept_Img, location, fee, secviceAdderEmail}= appointmentDetails;
    const{user}=useContext(AuthContext)
    const patientEmail= user.email;
    const treatmentId= _id;
    const handleBook=(e)=>{
        e.preventDefault();
        const form= e.target;
        const date= form.date.value;
        const status= 'pending';
        const symptoms= form.symptoms.value;
        const appointmentData= {doctorName,date,symptoms,patientEmail,status,department,fee,location,treatmentId,secviceAdderEmail}
        form.reset();
        fetch('http://localhost:5000/addappointment',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(appointmentData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged===true){
                Swal.fire({
                    title: 'Success',
                    text:'Successfully Requested for Appointment',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
            }
        })

    }
    return (
        <div className="mb-5">
            <Helmet>
                <title>Confirm Appointment</title>
            </Helmet>
            <div>
                <div className="p-4 bg-slate-200">
                    <h2 className="bg-blue-300 p-2 text-white font-semibold w-fit">Book Appointment</h2>
                </div>
                <div className="bg-blue-50">
                <div className="max-w-6xl mx-auto space-y-3">
                    <p className="font-bold">Treatment Id:</p>
                    <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{_id}</p>
                    <p className="font-semibold">Department:</p>
                    <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{department}</p>
                    <img className="w-1/2" src={dept_Img} alt="" />
                    <div className="flex gap-4">
                        <div>
                            <p className="font-semibold">Doctors Name:</p>
                            <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{doctorName}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Contact Email:</p>
                            <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{secviceAdderEmail}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <p className="font-semibold">Patients Name:</p>
                            <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{user.displayName}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Contact Email:</p>
                            <p className="p-3 bg-slate-50 font-medium border rounded w-fit">{user.email}</p>
                        </div>
                    </div>
                    <form onSubmit={handleBook}>
                        <p className="font-semibold">Pick your appointment date</p>
                        <input className="px-3 py-2 border " type="date" name="date" />
                        <p className="font-semibold">short description of symptoms</p>
                        <input className="w-1/2 p-4 border bg-slate-100" type="text" name="symptoms" />
                        <div className="flex gap-3 mt-4">
                            <p className="px-3 py-2 bg-slate-400 flex items-center text-white font-semibold">Appointment fee: {fee}</p>
                            <input type="submit" className="px-4 font-bold py-3 max-w-44  border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white" value={'Confirm'}/>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;