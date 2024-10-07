import { Product } from "entity/Product";
import { fetchProducts } from "entity/Product/lib/requests";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./ProductsList.module.scss";

interface ProductsListProps {
    className?: string;
    title?: string;
}

export const ProductsList = (props: ProductsListProps) => {
    const { className, title = "", ...otherProps } = props;
    const { isLoading, result } = useLoading(fetchProducts);

    let returnedComponent = <></>;

    if (isLoading) returnedComponent = <Loader />;
    else if (result.error)
        returnedComponent = (
            <Text preset={TextPreset.SUBTITLE}>
                Произошла ошибка: {result.errorMessage}
            </Text>
        );
    else
        returnedComponent = (
            <>
                {result.data.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </>
        );

    return (
        <div
            className={cmcl(cls.ProductsList, {}, [className])}
            {...otherProps}
        >
            {title && (
                <Text preset={TextPreset.TITLE} className={cls.List}>
                    {title}
                </Text>
            )}
            <div className={cmcl(cls.List, { [cls.LoadingList]: isLoading })}>
                {returnedComponent}
            </div>
        </div>
    );
};
