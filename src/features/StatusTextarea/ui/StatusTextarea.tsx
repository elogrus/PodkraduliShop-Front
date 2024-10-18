import { forwardRef } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Textarea, TextareaProps } from "shared/ui/Textarea/Textarea";
import * as cls from "./StatusTextarea.module.scss";

interface StatusTextareaProps extends TextareaProps {
    className?: string;
    status: boolean | null;
}

export type StatusType = boolean | null;

export const StatusTextarea = forwardRef<
    HTMLTextAreaElement,
    StatusTextareaProps
>((props, ref) => {
    const { className, status, ...otherProps } = props;
    return (
        <Textarea
            ref={ref}
            className={cmcl(className, {
                [cls.GoodTextarea]: status === true,
                [cls.BadTextarea]: status === false,
            })}
            {...otherProps}
        />
    );
});
