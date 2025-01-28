import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes';
import {app} from './firebaseConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)


/*
Libraries used
toastify
router-dom
antd
react-icons
moment.js
uuid
addDoc firebase(Documentation)

*/
