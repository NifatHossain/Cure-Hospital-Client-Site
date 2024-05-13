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
const router = createBrowserRouter([
  {
    path: "/",
    element:<LayOut></LayOut>,
    
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
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
