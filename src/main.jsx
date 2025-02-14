import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import LayOut from './pages/LayOut';
import AuthProvider from './fireBase/AuthProvider';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AddTreatments from './pages/AddTreatments';
import PrivateRoute from './fireBase/PrivateRoute';
import AllTreatmentsPage from './pages/AllTreatmentsPage';
import CardDetailsPage from './pages/CardDetailsPage';
import BookAppointment from './pages/BookAppointment';
import ManageMyServices from './pages/ManageMyServices';
import UpdateTreatmentPage from './pages/UpdateTreatmentPage';
import BookedAppointments from './pages/BookedAppointments';
import ServicesToDo from './pages/ServicesToDo';
const router = createBrowserRouter([
  {
    path: "/",
    element:<LayOut></LayOut>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <Login></Login>
      },
      {
        path:'/addtreatments',
        element:<PrivateRoute><AddTreatments></AddTreatments></PrivateRoute>
      },
      {
        path:'/alltreatments',
        element:<AllTreatmentsPage></AllTreatmentsPage>,
        loader:()=>fetch('https://cure-hospital-server.vercel.app/alltreatments')
      },
      {
        path: '/carddetails/:id',
        element:<PrivateRoute><CardDetailsPage></CardDetailsPage></PrivateRoute>,
        loader: ({params})=>fetch(`https://cure-hospital-server.vercel.app/carddetails/${params.id}`)
      },
      {
        path:'/bookappointment/:id',
        element: <PrivateRoute><BookAppointment></BookAppointment></PrivateRoute>,
        loader: ({params})=>fetch(`https://cure-hospital-server.vercel.app/carddetails/${params.id}`)
      },
      {
        path:'/alltreatments/:email',
        element:<PrivateRoute><ManageMyServices></ManageMyServices></PrivateRoute>,
        loader:({params})=>fetch(`https://cure-hospital-server.vercel.app/alltreatments/${params.email}`)
      },
      {
        path:'/updatetreatment/:id',
        element:<PrivateRoute><UpdateTreatmentPage></UpdateTreatmentPage></PrivateRoute>,
        loader: ({params})=>fetch(`https://cure-hospital-server.vercel.app/carddetails/${params.id}`)
      },
      {
        path:'/bookedappointments/:email',
        element:<PrivateRoute><BookedAppointments></BookedAppointments></PrivateRoute>,
        loader:({params})=>fetch(`https://cure-hospital-server.vercel.app/bookedappointments/${params.email}`)
      },
      {
        path:'todo/:email',
        element:<PrivateRoute><ServicesToDo></ServicesToDo></PrivateRoute>,
        loader:({params})=>fetch(`https://cure-hospital-server.vercel.app/todo/${params.email}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
