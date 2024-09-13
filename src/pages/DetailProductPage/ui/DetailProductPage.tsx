import { useParams } from 'react-router-dom';
import * as cls from './DetailProductPage.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Slider } from 'shared/ui/Slider/Slider';
import { Text } from 'shared/ui/Text/ui/Text';

interface DetailProductPageProps {
    className?: string;
}

export const DetailProductPage = (props: DetailProductPageProps) => {
    const { className, ...otherProps } = props;

    const params = useParams()
    return (
        <div className={cmcl(cls.DetailProductPage, {}, [className])} {...otherProps}>
            
        </div>
    );
};
