import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Link } from 'shared/ui/Link/Link';
import { Price } from 'shared/ui/Price/Price';
import { TextColor, TextPreset } from 'shared/ui/Text/types/Text';
import { Text } from 'shared/ui/Text/ui/Text';
import { ProductType } from '../types/Product';
import * as cls from './Product.module.scss';

interface ProductProps {
    className?: string;
    product: ProductType;
}

export const Product = (props: ProductProps) => {
    const { className, product, ...otherProps } = props;
    return (
        <Link target='_blank' to={product.productUrl} className={cmcl(cls.Product, {}, [className])} {...otherProps}>
            <img className={cls.ProductImage} src={product.imageURL}></img>

            <div className={cls.ProductWrapper}>
                <Text preset={TextPreset.TITLE}>{product.title}</Text>
                <Text preset={TextPreset.REGULAR}>{product.description}</Text>
                <Price price={product.price} currency={product.currency} discount={product.discount} />
            </div>

            <Text color={TextColor.CL0} className={cls.ProductLink}>Перейти</Text>
        </Link>
    );
};
