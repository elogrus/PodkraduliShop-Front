import * as cls from './Link.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Link as RouterLink, To } from 'react-router-dom';
import { ReactNode } from 'react';
import { Text, TextPreset } from '../Text/Text';

interface LinkProps {
    className?: string;
    children: ReactNode;
    to: To;
}

export const Link = (props: LinkProps) => {
    const { className, children, to, ...otherProps } = props;
    return (
        <RouterLink className={cmcl(cls.Link, {}, [className])} {...otherProps} to={to}>
            {
                typeof children === 'string'
                    ? <Text preset={TextPreset.REGULAR}>{children}</Text>
                    : children
            }
        </RouterLink>
    );
};
