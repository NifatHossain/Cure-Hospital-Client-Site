import { useContext } from "react";
import { AuthContext } from "../fireBase/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
    const {registerUser,updateUserInfo}=useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        const image= form.image.value;
        registerUser(email,password)
        .then((user)=>{
            console.log(user.user)
            updateUserInfo(name,image)
            .then(() => {
                console.log('User info updated')
                form.reset();
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
              })
              .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to  Register',
                    icon: 'Error',
                    confirmButtonText: 'okay'
                  })
              });
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="bg-slate-100">
            <Helmet>
                <title>Registration Page</title>
            </Helmet>
        <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-semibold text-4xl text-blue-500 py-4">Registration</h2>
           <div className="rounded-xl grid grid-cols-2 gap-4 items-center justify-center  bg-white p-10">
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <img src="https://i.ibb.co/GCcBVt2/Screenshot-2024-05-13-102902.png" className="w-1/2" alt="" />
                    <input type="text" name="name" placeholder="Your Name" className="p-4 border-2 rounded-lg" />
                    <input type="email" name="email" placeholder="Email Address" className="p-4 border-2 rounded-lg" />
                    <input type="password" name="password" placeholder="Enter Password" className="p-4 border-2 rounded-lg" />
                    <input type="text" name="image" placeholder="Image URL" className="p-4 border-2 rounded-lg"/>
                    <input type="submit" value={'Register'} className="p-4 cursor-pointer text-xl font-semibold bg-blue-500 text-white border-2 rounded-lg"/>
                </form>
                <p className="mt-4">Already have an account? <Link to={'/signin'} className="text-blue-700">SignIn</Link> </p>
            </div>
            <div className="hidden md:block">
                <img src="https://i.ibb.co/8BpLZ81/registration.jpg" alt="" />
            </div>
           </div>
        </div>
        </div>
    );
};

export default Register;