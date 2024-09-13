import * as cls from './DetailProduct.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface DetailProductProps {
    className?: string;
}

export const DetailProduct = (props: DetailProductProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.DetailProduct, {}, [className])} {...otherProps}>
            hello
        </div>
    );
};
