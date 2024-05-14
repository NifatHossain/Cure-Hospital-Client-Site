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
        loader:()=>fetch('http://localhost:5000/alltreatments')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
