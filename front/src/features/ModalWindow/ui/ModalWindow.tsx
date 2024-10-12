import { HTMLProps, ReactNode } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./ModalWindow.module.scss";

interface ModalWindowProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const ModalWindow = (props: ModalWindowProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div className={cmcl(cls.ModalWindow, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};
