import { compareClasses as cmcl } from 'shared/lib/classNames';
import LogoSVG from 'shared/assets/logo.svg';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon = (props: LogoIconProps) => {
    const { className, ...otherProps } = props;
    return (
        <img src={LogoSVG} className={cmcl(className)} {...otherProps} />
    );
};
