import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../fireBase/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const UpdateTreatmentPage = () => {
    const details= useLoaderData();
    const {_id,doctorName,image, degrees,department, dept_Img,fee}= details;
    const {user}=useContext(AuthContext);
    const navigate= useNavigate();
    const handleAddDoctor=(e)=>{
        e.preventDefault();
        const form= e.target;
        const doctorName=form.doctorName.value;
        const image= form.image.value;
        const degrees= form.degrees.value;
        const department= form.department.value;
        const dept_Img= form.dept_Img.value;
        const location= form.location.value;
        const fee= form.fee.value;
        const serviceAdderName= user.displayName;
        // const secviceAdderEmail= user.email;
        const serviceAdderImage= user.photoURL;
        const updatedTreatmentData= {doctorName,image, degrees,department, dept_Img, location, fee, serviceAdderName,serviceAdderImage}
        console.log(updatedTreatmentData);
        form.reset();
        fetch(`http://localhost:5000/updatetreatment/${_id}`,{
            method:'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedTreatmentData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text:'Updated information Successfully',
                    icon: 'success',
                    confirmButtonText: 'okay'
                })
                  setTimeout(()=> navigate(`/alltreatments/${user.email}`),2000)
            }
            else{
                Swal.fire({
                    title: 'Error',
                    text:'Data was not updated',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            }
        })
    }
    return (
        <div className="">
            <Helmet>
                <title>Updaed Treatment</title>
            </Helmet>
            <div className="p-6 bg-slate-200">
                <p className="p-2 w-fit bg-blue-400 rounded-md text-white font-bold">Add New Treatment</p>
            </div>
            <div className="max-w-7xl mx-auto mt-6">
                <form onSubmit={handleAddDoctor} className="flex flex-col gap-4">
                    <p className="text-slate-400 font-medium">Doctors Name</p>
                    <input type="text" name="doctorName" className="p-3 bg-slate-100 w-1/2 border rounded-md" defaultValue={doctorName} required/>
                    <p className="text-slate-400 font-medium">Doctors Image URL</p>
                    <input type="text" name="image" className="p-3 bg-slate-100 w-1/2 border rounded-md" placeholder="image ratio must be 3:2" defaultValue={image} required/>
                    <p className="text-slate-400 font-medium">Doctor&apos;s Qualifications</p>
                    <input type="text" name="degrees" className="p-3 bg-slate-100 w-1/2 border rounded-md" placeholder="within 50-57 words" defaultValue={degrees} required/>
                    <div className="flex flex-col md:flex-row  gap-3">
                        <div className="">
                            <p className="text-slate-400 font-medium">Enter Department</p>
                            <input type="text" name="department" className="p-3 bg-slate-100 w-1/2 md:w-full border rounded-md" defaultValue={department} required/>
                        </div>
                        <div>
                            <p className="text-slate-400 font-medium">Department Image</p>
                            <input type="text" name="dept_Img" className="p-3 bg-slate-100 w-1/2 md:w-full border rounded-md" placeholder="image ratio must be 19:9" defaultValue={dept_Img} required/>
                        </div>
                    </div>
                    <p className="text-slate-400 font-medium">Location</p>
                    <input type="text" name="location" className="p-3 bg-slate-100 w-1/2 border rounded-md" defaultValue={'Cure Hospital, Dhaka-1206'} required/>
                    <p className="text-slate-400 font-medium">Appointment fee</p>
                    <input type="text" name="fee" className="p-3 bg-slate-100 w-1/2 border rounded-md" placeholder="1000 tk" defaultValue={fee} required/>

                    <input type="submit" className="p-3 w-1/2 bg-blue-500 rounded-md font-semibold text-white cursor-pointer" value={'Update Information'} />
                </form>
            </div>
        </div>
    );
};

export default UpdateTreatmentPage;