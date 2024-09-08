import { ReactNode } from 'react';
import * as cls from './Button.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <button className={cmcl(cls.Button, {}, [className])} {...otherProps}>
            {children}
        </button>
    );
};
