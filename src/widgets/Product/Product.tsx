import { getProductById } from "entity/Product/lib/requests";
import { ImagesLooker } from "features/ImagesLooker";
import { Image } from "features/ImagesLooker/ui/ImagesLooker";
import { useEffect, useState } from "react";
import { StringsConsts } from "shared/consts/string";
import { URLs } from "shared/consts/urls";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { Attributes } from "../../entity/Product/ui/Attributes/Attributes";
import { Price } from "../../features/Price/Price";
import { ProductSkeleton } from "../../entity/Product/ui/ProductSkeleton/ProductSkeleton";
import * as cls from "./Product.module.scss";
import { Button } from "shared/ui/Button/Button";
import { toast } from "react-toastify";
import {
    checkFavorite,
    createFavorite,
    deleteFavoriteByID,
} from "entity/Favorite/lib/requests";

interface ProductProps {
    className?: string;
    productId: number;
}
const createImageURLs = (count: number, productId: number) => {
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

    useEffect(() => {
        checkFavorite(productId).then((result) => {
            if (result.data) setIsFavorite(result.data.isFavorite);
        });
    }, [productId]);

    const product = result?.data;
    const [imagesURL, setImagesURL] = useState<Image[]>([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const onFavoriteAddClick = async () => {
        const result = await createFavorite(product.id);
        if (result.error) {
            toast.error(result.error);
            return;
        }
        setIsFavorite(true);
        toast.success(result.data);
    };

    const onFavoriteRemoveClick = async () => {
        const result = await deleteFavoriteByID(product.id);
        if (result.error) {
            toast.error(result.error);
            return;
        }
        setIsFavorite(false);
        toast.success(result.data);
    };

    const onBuyClick = () => {
        toast(
            "Что-то должно произойти, например, открыться окно с оплатой. Но я не сделал 🙃"
        );
    };

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
                <Price
                    currency={product.currency}
                    price={product.price}
                    discount={product.discount}
                />
                <div className={cls.Description}>
                    <Text preset={TextPreset.SUBTITLE} mods={[TextMods.BOLD]}>
                        Описание:
                    </Text>
                    <Text preset={TextPreset.REGULAR}>
                        {product.description}
                    </Text>
                </div>
                <Attributes product={product} />
                <div className={cls.actionsBlock}>
                    <Button onClick={onBuyClick}>Купить</Button>
                    {isFavorite ? (
                        <Button onClick={onFavoriteRemoveClick}>
                            Убрать из избранного
                        </Button>
                    ) : (
                        <Button onClick={onFavoriteAddClick}>
                            В избранное
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
