import { getFavorites } from "entity/Favorite/lib/requests";
import { Favorite } from "features/Favorite/Favorite";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./FavoritesList.module.scss";

interface FavoritesListProps {
    className?: string;
    start: number;
    count: number;
}

export const FavoritesList = (props: FavoritesListProps) => {
    const { className, start, count, ...otherProps } = props;
    const { isLoading, result } = useLoading(getFavorites, [start, count]);
    return (
        <div
            className={cmcl(cls.FavoritesList, {}, [className])}
            {...otherProps}
        >
            {isLoading && <Loader />}
            {!isLoading && result.error && (
                <Text>Произошла ошибка: {result.error}</Text>
            )}
            {!isLoading && !result.error && result.data.length !== 0 && (
                <div className={cls.nothingContainer}>
                    <Text preset={TextPreset.TITLE}>Ничего не найдено =(</Text>
                </div>
            )}
            {!isLoading && !result.error && (
                <div className={cls.List}>
                    {result.data.map((favorite) => (
                        <Favorite key={favorite.id} favorite={favorite} />
                    ))}
                </div>
            )}
        </div>
    );
};
