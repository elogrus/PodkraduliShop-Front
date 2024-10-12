import { forwardRef, HTMLProps } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./Input.module.scss";

export enum InputPreset {
    REGULAR = "preset_regular",
    CLEAR = "preset_clear",
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
    className?: string;
    preset?: InputPreset;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref = null) => {
        const {
            className,
            value = "",
            preset = InputPreset.REGULAR,
            onChange = () => {},
            ...otherProps
        } = props;
        const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
            e
        ) => {
            onChange(e);
        };
        return (
            <input
                onChange={onInputChange}
                className={cmcl(cls.Input, {}, [cls[preset], className])}
                ref={ref}
                {...otherProps}
            />
        );
    }
);
