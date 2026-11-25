import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlackOps from './BlackOps/BlackOps.jsx';
import BlackOps2 from './BlackOps2/BlackOps2.jsx';
import BlackOps3 from './BlackOps3/BlackOps3.jsx';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/blackops", element: <BlackOps/>},
  {path: "/blackops2", element: <BlackOps2/>},
  {path: "/blackops3", element: <BlackOps3/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
