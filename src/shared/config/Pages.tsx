import { DetailProductPage } from "pages/DetailProductPage";
import { ProductsPage } from "pages/ProductsPage/";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PageNotation {
    name: string;
    path: string;
    element?: ReactNode;
}

export const Pages: PageNotation[] = [
    {
        name: 'Товар',
        path: '/product/:id',
        element: <DetailProductPage />
    },
    {
        name: 'Товары',
        path: '/products',
        element: <ProductsPage />
    },
    {
        name: 'Redirect',
        path: '*',
        element: <Navigate to='/products' />
    },
]