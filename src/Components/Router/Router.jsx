// Route.jsx
import React, { useContext } from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorHandal from '../ErrorHandal/ErrorHandal';

const Route = () => {

    return createBrowserRouter([
        {
            path: "/",
            element: <MainLayOut />,
            errorElement: <ErrorHandal />,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/register',
                    element: <Register />
                },
                {
                    path: '/login',
                    element: <Login />
                }
            ]
        },
    ]);
}

export default Route;