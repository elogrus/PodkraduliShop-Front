import * as cls from './DetailProductSkeleton.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface DetailProductSkeletonProps {
    className?: string;
}

export const DetailProductSkeleton = (props: DetailProductSkeletonProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.DetailProductSkeleton, {}, [className])} {...otherProps}>
            <div className={cls.ImageLooker}>
                <div className={cls.Carousel}></div>
                <div className={cls.Image}></div>
            </div>

            <div className={cls.Right}>
                <div className={cls.Text}></div>
                <div className={cls.Text + ' ' + cls.MiddleText}></div>
                <div className={cls.Text + ' ' + cls.BigText}></div>
            </div>

        </div>
    );
};
