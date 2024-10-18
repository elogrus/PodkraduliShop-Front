import { forwardRef, HTMLProps } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./Textarea.module.scss";

export enum TextareaPreset {
    REGULAR = "preset_regular",
    CLEAR = "preset_clear",
}

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
    className?: string;
    preset?: TextareaPreset;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props, ref = null) => {
        const {
            className,
            value = "",
            preset = TextareaPreset.REGULAR,
            onChange = () => {},
            ...otherProps
        } = props;
        const onTextareaChange: React.ChangeEventHandler<
            HTMLTextAreaElement
        > = (e) => {
            onChange(e);
        };
        return (
            <textarea
                onChange={onTextareaChange}
                className={cmcl(cls.Textarea, {}, [cls[preset], className])}
                ref={ref}
                {...otherProps}
            />
        );
    }
);
