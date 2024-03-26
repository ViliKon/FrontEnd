import App from './App';
import React from 'react';
import ReactDOM  from 'react-DOM/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);