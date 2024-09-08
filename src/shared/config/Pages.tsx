import { ReactNode } from "react";
import { Navigate, redirect } from "react-router-dom";

interface PageNotation {
    name: string;
    path: string;
    element: ReactNode;
}

export const Pages: PageNotation[] = [
    {
        name: 'About',
        path: '/about',
        element: <div>About</div>
    },
    {
        name: 'Home',
        path: '/home',
        element: <div>Home</div>
    },
    {
        name: '404',
        path: '/404',
        element: <div>404</div>
    },
    {
        name: 'Redirect',
        path: '*',
        element: <Navigate to='/'/>
    },
]