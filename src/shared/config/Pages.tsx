import { AuthPage } from "pages/AuthPage";
import { DetailProductPage } from "pages/DetailProductPage";
import { ProductsPage } from "pages/ProductsPage/";
import { ProfilePage } from "pages/ProfilePage";
import { SettingsPage } from "pages/SettingsPage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Paths } from "./Paths";

interface PageNotation {
    name: string;
    path: string;
    element?: ReactNode;
}

export interface PageProps {
    title?: string;
}
export const Pages: PageNotation[] = [
    {
        name: "Авторизация",
        path: Paths.AUTH_PATH,
        element: <AuthPage title={"Авторизация"} />,
    },
    {
        name: "Профиль",
        path: Paths.PROFILE_PATH,
        element: <ProfilePage title={"Профиль"} />,
    },
    {
        name: "Настройки профиля",
        path: Paths.SETTINGS_PATH,
        element: <SettingsPage title={"Настройки"} />,
    },
    {
        name: "Товар",
        path: Paths.DETAIL_PRODUCT_PATH,
        element: <DetailProductPage title={"Товар"} />,
    },
    {
        name: "Товары",
        path: Paths.PRODUCTS_PATH,
        element: <ProductsPage title={"Товары"} />,
    },
    {
        name: "Редирект",
        path: "*",
        element: <Navigate to="/products" />,
    },
];
