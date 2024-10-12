import { HTMLProps } from "react";
import * as cls from "./SmallLoader.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";

interface SmallLoaderProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    color?: SmallLoaderColor;
}

export enum SmallLoaderColor {
    LIGHT = "light",
    DARK = "dark",
}

export const SmallLoader = (props: SmallLoaderProps) => {
    const { className, color = SmallLoaderColor.DARK, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.SmallLoader, {}, [cls[color], className])}
            {...otherProps}
        ></div>
    );
};
