import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/routes/Home";
import NewMap from "@/routes/NewMap";
import Maps from "@/routes/Maps";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <div>404</div>,
    },
    {
        path: '/new',
        element: <NewMap/>,
    },
    {
        path: '/maps',
        element: <Maps/>,
    }
]);

createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
