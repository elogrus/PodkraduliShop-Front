import { DetailProductPage } from "pages/DetailProductPage";
import { ProductsPage } from "pages/ProductsPage/";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Paths } from "./Paths";
import { AuthPage } from "pages/AuthPage";

interface PageNotation {
    name: string;
    path: string;
    element?: ReactNode;
}

export const Pages: PageNotation[] = [
    {
        name: "Авторизация",
        path: Paths.AUTH_PATH,
        element: <AuthPage />,
    },
    {
        name: "Товар",
        path: Paths.DETAIL_PRODUCT_PATH,
        element: <DetailProductPage />,
    },
    {
        name: "Товары",
        path: Paths.PRODUCTS_PATH,
        element: <ProductsPage />,
    },
    {
        name: "Редирект",
        path: "*",
        element: <Navigate to="/products" />,
    },
];
