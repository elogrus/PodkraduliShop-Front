import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./ProductSkeleton.module.scss";

interface ProductSkeletonProps {
    className?: string;
}

export const ProductSkeleton = (props: ProductSkeletonProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.ProductSkeleton, {}, [className])}
            {...otherProps}
        >
            <div className={cls.ImageLooker}>
                <div className={cls.Carousel}></div>
                <div className={cls.Image}></div>
            </div>

            <div className={cls.Right}>
                <div className={cls.Text}></div>
                <div className={cls.Text + " " + cls.MiddleText}></div>
                <div className={cls.Text + " " + cls.BigText}></div>
            </div>
        </div>
    );
};
