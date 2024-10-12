import { HTMLProps, ReactNode } from 'react';
import * as cls from './Text.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { TextColor, TextMods, TextPreset } from '../types/Text';

export interface TextProps extends HTMLProps<HTMLSpanElement> {
    children: ReactNode;
    className?: string;
    preset?: TextPreset;
    mods?: (TextMods)[];
    color?: TextColor;
}

export const Text = (props: TextProps) => {
    const {
        className,
        children,
        preset = TextPreset.REGULAR,
        mods = [],
        color = TextColor.CL5,
        ...otherProps
    } = props;

    const modsClasses: string[] = []
    for (const mode of mods) {
        modsClasses.push(cls[mode])
    }

    return (
        <span className={cmcl(cls.Text, {}, [cls[preset], cls[color], ...modsClasses, className])} {...otherProps}>
            {children}
        </span>
    );
};
