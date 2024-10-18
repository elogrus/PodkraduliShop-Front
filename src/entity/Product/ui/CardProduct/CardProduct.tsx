import { ProductType } from "entity/Product/types/Product";
import { Paths } from "shared/config/Paths";
import { URLs } from "shared/consts/urls";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Link } from "shared/ui/Link/Link";
import { TextColor, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { Price } from "../Price/Price";
import * as cls from "./CardProduct.module.scss";

interface CardProductProps {
    className?: string;
    product: ProductType;
}

export const CardProduct = (props: CardProductProps) => {
    const { className, product, ...otherProps } = props;
    return (
        <Link
            target="_blank"
            to={Paths.DETAIL_PRODUCT_PATH_WITHOUT_ID + product.id}
            className={cmcl(cls.CardProduct, {}, [className])}
            {...otherProps}
        >
            <img
                loading="lazy"
                className={cls.CardProductImage}
                src={
                    URLs.PRODUCT_IMAGE_WITHOUT_ID_AND_NUMBER + product.id + "/1"
                }
            ></img>

            <div className={cls.CardProductWrapper}>
                <Text preset={TextPreset.TITLE}>{product.title}</Text>
                <Text preset={TextPreset.REGULAR}>{product.description}</Text>
                {/* <CardPrice
                    price={product.price}
                    currency={product.currency}
                    discount={product.discount}
                /> */}
                <Price product={product} />
            </div>

            <Text color={TextColor.CL0} className={cls.CardProductLink}>
                Перейти
            </Text>
        </Link>
    );
};
