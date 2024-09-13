import { Product } from 'entity/Product';
import { useLoading } from 'shared/hooks/useLoading';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextPreset } from 'shared/ui/Text/types/Text';
import { Text } from 'shared/ui/Text/ui/Text';
import * as cls from './ProductsList.module.scss';
import { ResponseType } from 'shared/types/Response';
import { ProductType } from 'entity/Product/types/Product';

interface ProductsListProps {
    className?: string;
    getProducts: () => Promise<ResponseType<ProductType[]>>;
    title?: string;
}

export const ProductsList = (props: ProductsListProps) => {
    const { className, getProducts, title = '', ...otherProps } = props;
    const { isLoading, result } = useLoading(getProducts)

    let returnedComponent = <></>

    if (isLoading) returnedComponent = <Loader />
    else if (result.error) returnedComponent = <Text preset={TextPreset.SUBTITLE}>Произошла ошибка: {result.errorMessage}</Text>
    else returnedComponent = <>{result.data.map((product) => <Product product={product} key={product.id} />)}</>

    return (
        <div className={cmcl(cls.ProductsList, {}, [className])} {...otherProps}>
            {title && <Text preset={TextPreset.TITLE} className={cls.List}>{title}</Text>}
            <div className={cmcl(cls.List, { [cls.LoadingList]: isLoading })}>
                {returnedComponent}
            </div>
        </div>
    );
};
