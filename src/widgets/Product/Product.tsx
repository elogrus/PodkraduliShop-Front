import { getProductById } from "entity/Product/lib/requests";
import { ImagesLooker } from "features/ImagesLooker";
import { Image } from "features/ImagesLooker/ui/ImagesLooker";
import { useState } from "react";
import { StringsConsts } from "shared/consts/string";
import { URLs } from "shared/consts/urls";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { Attributes } from "../../entity/Product/ui/Attributes/Attributes";
import { Price } from "../../entity/Product/ui/Price/Price";
import { ProductSkeleton } from "../../entity/Product/ui/ProductSkeleton/ProductSkeleton";
import * as cls from "./Product.module.scss";

interface ProductProps {
    className?: string;
    productId: string;
}
const createImageURLs = (count: number, productId: string) => {
    const result: Image[] = [];
    for (let i = 1; i <= count; i++) {
        result.push({
            imageURL:
                URLs.PRODUCT_IMAGE_WITHOUT_ID_AND_NUMBER + productId + "/" + i,
            miniURL:
                URLs.PRODUCT_IMAGE_MINI_WITHOUT_ID_AND_NUMBER +
                productId +
                "/" +
                i,
        });
    }
    return result;
};
export const Product = (props: ProductProps) => {
    const { className, productId, ...otherProps } = props;
    const { isLoading, result } = useLoading(
        getProductById,
        [productId],
        (result) => {
            setImagesURL(createImageURLs(result.data.imagesCount, productId));
        }
    );

    const product = result?.data;
    const [imagesURL, setImagesURL] = useState<Image[]>([]);

    document.title = product?.title + StringsConsts.PAGE_TITLE_PART;
    if (isLoading) return <ProductSkeleton />;
    else if (result.error)
        return (
            <Text preset={TextPreset.SUBTITLE}>
                Произошла ошибка: {result.error}
            </Text>
        );
    return (
        <div className={cmcl(cls.Product, {}, [className])} {...otherProps}>
            {imagesURL && <ImagesLooker imagesURL={imagesURL} />}
            <div className={cls.Right}>
                <Text preset={TextPreset.TITLE} mods={[TextMods.BOLD]}>
                    {product.title}
                </Text>
                <Price product={product} />
                <div className={cls.Description}>
                    <Text preset={TextPreset.SUBTITLE} mods={[TextMods.BOLD]}>
                        Описание:
                    </Text>
                    <Text preset={TextPreset.REGULAR}>
                        {product.description}
                    </Text>
                </div>
                <Attributes product={product} />
            </div>
        </div>
    );
};
