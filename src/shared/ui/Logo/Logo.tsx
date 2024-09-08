import { LogoIcon } from 'shared/ui/Icons/LogoIcon/LogoIcon';
import * as cls from './Logo.module.scss';
import { Text, TextPreset } from 'shared/ui/Text/Text';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface LogoProps {
    className?: string;
}

export const Logo = (props: LogoProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Logo, {}, [className])} {...otherProps}>
            <LogoIcon className={cls.LogoIcon} />
            <Text preset={TextPreset.LOGO}>Podkraduli Shop</Text>
        </div>
    );
};
