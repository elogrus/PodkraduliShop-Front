import { getProducts } from 'entity/Product/lib/requests';
import { ProductsList } from 'features/ProductsList/ui/ProductsList';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import * as cls from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = (props: ProductsPageProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.ProductsPage, {}, [className])} {...otherProps}>
            <ProductsList title='Самые классные' getProducts={getProducts} />
            <ProductsList title='Самые продаваемые' getProducts={getProducts} />
            <ProductsList title='Еще какие-то' getProducts={getProducts} />
        </div>
    );
};

export default ProductsPage