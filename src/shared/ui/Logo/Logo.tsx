import { LogoIcon } from 'shared/ui/Icons/LogoIcon/LogoIcon';
import * as cls from './Logo.module.scss';
import { Text } from 'shared/ui/Text/ui/Text';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { TextPreset } from '../Text/types/Text';

interface LogoProps {
    className?: string;
    textColor?: 'WHITE' | 'BLACK'
}

export const Logo = (props: LogoProps) => {
    const { className, textColor = 'WHITE', ...otherProps } = props;
    return (
        <div className={cmcl(cls.Logo, {}, [className])} {...otherProps}>
            <LogoIcon className={cls.LogoIcon} />
            <Text preset={TextPreset.LOGO} className={textColor === 'WHITE' ? cls.TextWhite : cls.TextBlack}>Podkraduli Shop</Text>
        </div>
    );
};
