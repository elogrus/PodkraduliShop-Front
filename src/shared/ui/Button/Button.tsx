import { ReactNode } from 'react';
import * as cls from './Button.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

export enum ButtonPreset {
    REGULAR = "preset_regular",
    CLEAR = "preset_clear"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    preset?: ButtonPreset;
}

export const Button = (props: ButtonProps) => {
    const { className, children, preset = ButtonPreset.REGULAR, ...otherProps } = props;
    return (
        <button className={cmcl(cls.Button, {}, [cls[preset] , className])} {...otherProps}>
            {children}
        </button>
    );
};
