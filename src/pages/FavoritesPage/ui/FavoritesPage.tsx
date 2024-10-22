import { PageProps } from "shared/config/Pages";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { FavoritesList } from "widgets/FavoritesList/ui/FavoriteList/FavoritesList";
import * as cls from "./FavoritesPage.module.scss";

const FavoritesPage = ({ tabTitle }: PageProps) => {
    usePageTitle(tabTitle);
    return (
        <div className={cls.FavoritesPage}>
            <FavoritesList start={0} count={20} />
        </div>
    );
};

export default FavoritesPage;
