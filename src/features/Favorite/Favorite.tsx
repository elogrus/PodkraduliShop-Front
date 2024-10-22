import { Favorite as FavoriteType } from "entity/Favorite/types/Favorite";
import { Price } from "features/Price/Price";
import Arrow from "shared/assets/arrow.svg";
import { Paths } from "shared/config/Paths";
import { URLs } from "shared/consts/urls";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { getCssVariable } from "shared/lib/getCssVariable";
import { Link } from "shared/ui/Link/Link";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./Favorite.module.scss";
interface FavoriteProps {
    className?: string;
    favorite: FavoriteType;
}

export const Favorite = (props: FavoriteProps) => {
    const { className, favorite, ...otherProps } = props;
    return (
        <Link
            to={Paths.DETAIL_PRODUCT_PATH_WITHOUT_ID + favorite.productID}
            className={cmcl(cls.Favorite, {}, [className])}
            {...otherProps}
        >
            <img
                className={cls.image}
                src={
                    URLs.PRODUCT_IMAGE_MINI_WITHOUT_ID_AND_NUMBER +
                    favorite.productID +
                    "/1"
                }
            />
            <div className={cls.textBlock}>
                <Text preset={TextPreset.REGULAR}>{favorite.title}</Text>
                <Text preset={TextPreset.SMALL}>{favorite.description}</Text>
            </div>
            <Price
                currency={favorite.currency}
                price={favorite.price}
                discount={favorite.discount}
            />
            <div className={cls.arrowWrapper}>
                <Arrow className={cls.arrow} fill={getCssVariable("--cl0")} />
            </div>
        </Link>
    );
};
