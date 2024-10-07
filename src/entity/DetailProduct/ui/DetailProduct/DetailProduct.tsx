import { ImagesLooker } from "widgets/ImagesLooker";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { getProductById } from "../../lib/requests";
import { Attributes } from "../Attributes/Attributes";
import { DetailProductSkeleton } from "../DetailProductSkeleton/DetailProductSkeleton";
import { Price } from "../Price/Price";
import * as cls from "./DetailProduct.module.scss";
import { StringsConsts } from "shared/consts/string";

interface DetailProductProps {
    className?: string;
    productId: string;
}

export const DetailProduct = (props: DetailProductProps) => {
    const { className, productId, ...otherProps } = props;

    const { isLoading, result } = useLoading(getProductById, [productId]);

    if (isLoading) return <DetailProductSkeleton />;
    else if (result.error)
        return (
            <Text preset={TextPreset.SUBTITLE}>
                Произошла ошибка: {result.errorMessage}
            </Text>
        );
    const product = result.data;
    document.title = product.title + StringsConsts.PAGE_TITLE_PART;
    return (
        <div
            className={cmcl(cls.DetailProduct, {}, [className])}
            {...otherProps}
        >
            <ImagesLooker imagesURL={product.imagesURL} />
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
