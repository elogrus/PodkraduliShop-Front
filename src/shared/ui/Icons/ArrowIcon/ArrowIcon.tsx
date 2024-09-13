import { compareClasses as cmcl } from 'shared/lib/classNames';
import LogoSVG from 'shared/assets/arrow.svg';

interface ArrowIconProps {
    className?: string;
}

export const ArrowIcon = (props: ArrowIconProps) => {
    const { className, ...otherProps } = props;
    return (
        <img src={LogoSVG} className={cmcl(className)} {...otherProps} />
    );
};
