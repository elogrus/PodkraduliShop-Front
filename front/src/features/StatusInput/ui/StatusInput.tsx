import { forwardRef } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Input, InputProps } from "shared/ui/Input/Input";
import * as cls from "./StatusInput.module.scss";

interface StatusInputProps extends InputProps {
    className?: string;
    status: boolean | null;
}

export type StatusType = boolean | null;

export const StatusInput = forwardRef<HTMLInputElement, StatusInputProps>(
    (props, ref) => {
        const { className, status, ...otherProps } = props;
        return (
            <Input
                ref={ref}
                className={cmcl(className, {
                    [cls.GoodInput]: status === true,
                    [cls.BadInput]: status === false,
                })}
                {...otherProps}
            />
        );
    }
);
