import { Paths } from "./Paths";

interface NavbarItemNotation {
    name: string;
    path: string;
}

export const NavbarItems: NavbarItemNotation[] = [
    {
        name: 'Товары',
        path: Paths.PRODUCTS_PATH
    },
    {
        name: 'Избранное',
        path: Paths.FAVORITES_PATH
    }
]