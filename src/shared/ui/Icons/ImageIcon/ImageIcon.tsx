import LogoSVG from "shared/assets/image.svg";
import { compareClasses as cmcl } from "shared/lib/classNames";

interface ImageIconProps {
    className?: string;
}

export const ImageIcon = (props: ImageIconProps) => {
    const { className, ...otherProps } = props;
    return <img src={LogoSVG} className={cmcl(className)} {...otherProps} />;
};
