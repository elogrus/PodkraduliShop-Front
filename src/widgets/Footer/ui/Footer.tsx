import { Text } from 'shared/ui/Text/ui/Text';
import * as cls from './Footer.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { TextColor, TextPreset } from 'shared/ui/Text/types/Text';

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Footer, {}, [className])} {...otherProps}>
            <footer className={cls.FooterContainer}>
                <span><Text preset={TextPreset.LOGO} color={TextColor.CL0}>Podkraduli Shop</Text><Text color={TextColor.CL0}> © Все права почти защищены.</Text> </span>
            </footer>
        </div>
    );
};
