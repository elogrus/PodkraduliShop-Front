import { AuthPage } from "pages/AuthPage";
import { DetailProductPage } from "pages/DetailProductPage";
import { ProductsPage } from "pages/ProductsPage/";
import { ProfilePage } from "pages/ProfilePage";
import { SettingsPage } from "pages/SettingsPage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Paths } from "./Paths";
import FavoritesPage from "pages/FavoritesPage/ui/FavoritesPage";

interface PageNotation {
    name: string;
    path: string;
    element?: ReactNode;
}

export interface PageProps {
    tabTitle?: string;
}
export const Pages: PageNotation[] = [
    {
        name: "Авторизация",
        path: Paths.AUTH_PATH,
        element: <AuthPage tabTitle={"Авторизация"} />,
    },
    {
        name: "Профиль",
        path: Paths.PROFILE_PATH,
        element: <ProfilePage tabTitle={"Профиль"} />,
    },
    {
        name: "Настройки профиля",
        path: Paths.SETTINGS_PATH,
        element: <SettingsPage tabTitle={"Настройки"} />,
    },
    {
        name: "Товар",
        path: Paths.DETAIL_PRODUCT_PATH,
        element: <DetailProductPage tabTitle={"Товар"} />,
    },
    {
        name: "Товары",
        path: Paths.PRODUCTS_PATH,
        element: <ProductsPage tabTitle={"Товары"} />,
    },
    {
        name: "Избранное",
        path: Paths.FAVORITES_PATH,
        element: <FavoritesPage tabTitle={"Товары"} />,
    },
    {
        name: "Редирект",
        path: "*",
        element: <Navigate to="/products" />,
    },
];
