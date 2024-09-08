import { ReactNode } from 'react';
import * as cls from './Text.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';


export enum TextPreset {
    SMALL = "preset_small",
    REGULAR = "preset_regular",
    SUBTITLE = "preset_subtitle",
    TITLE = "preset_title",
    LOGO = 'preset_logo'
}

export enum TextMods {
    UNDERSCORE = 'mode_underscore',
    BOLD = 'mode_bold'
}

interface TextProps {
    children: ReactNode;
    className?: string;
    preset?: TextPreset;
    mods?: (TextMods)[];
}

export const Text = (props: TextProps) => {
    const {
        className,
        children,
        preset = TextPreset.REGULAR,
        mods = [],
        ...otherProps
    } = props;

    const modsClasses: string[] = []
    for (const mode of mods) {
        modsClasses.push(cls[mode])
    }

    return (
        <div className={cmcl(cls.Text, {}, [cls[preset], ...modsClasses, className])} {...otherProps}>
            {children}
        </div>
    );
};
