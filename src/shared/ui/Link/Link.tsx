import * as cls from "./Link.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";
import {
    LinkProps as RouterLinkProps,
    Link as RouterLink,
    To,
} from "react-router-dom";
import { ReactNode } from "react";
import { Text, TextProps } from "shared/ui/Text/ui/Text";
import { TextPreset } from "../Text/types/Text";

interface LinkProps extends RouterLinkProps {
    className?: string;
    children: ReactNode;
    to: To;
    textProps?: Partial<TextProps>;
}

export const Link = (props: LinkProps) => {
    const { className, children, to, textProps, ...otherProps } = props;
    return (
        <RouterLink
            className={cmcl(cls.Link, {}, [className])}
            {...otherProps}
            to={to}
        >
            {typeof children === "string" ? (
                <Text {...textProps} preset={TextPreset.REGULAR}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </RouterLink>
    );
};
