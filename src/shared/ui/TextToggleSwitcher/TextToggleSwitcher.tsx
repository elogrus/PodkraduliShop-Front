import { ReactNode, useRef, useState } from "react";
import * as cls from "./TextToggleSwitcher.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Text } from "../Text/ui/Text";
import { TextMods, TextPreset } from "../Text/types/Text";

interface TextToggleSwitcherProps {
    className?: string;
    onToggle?: (toggleTo: boolean) => void;
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
    left: ReactNode;
    right: ReactNode;
    textPreset?: TextPreset;
    pinCenter?: boolean;
}

export const TextToggleSwitcher = (props: TextToggleSwitcherProps) => {
    const {
        className,
        toggled,
        setToggled,
        onToggle = () => {},
        left,
        right,
        textPreset = TextPreset.REGULAR,
        pinCenter = false,
        ...otherProps
    } = props;

    const onClickLeft = () => {
        setToggled(false);
        onToggle(false);
    };
    const onClickRight = () => {
        setToggled(true);
        onToggle(true);
    };

    return (
        <div
            className={cmcl(
                cls.TextToggleSwitcher,
                { [cls.PinCenter]: pinCenter },
                [className]
            )}
            {...otherProps}
        >
            <div
                onClick={onClickLeft}
                className={cmcl(cls.TextWrapper, {
                    [cls.PinCenter]: pinCenter,
                })}
            >
                <Text
                    preset={textPreset}
                    className={cmcl(cls.Text, { [cls.ToggledText]: !toggled })}
                >
                    {left}
                </Text>
            </div>
            <div className={cls.TextSeparator}>
                <Text preset={textPreset}>/</Text>
            </div>
            <div
                onClick={onClickRight}
                className={cmcl(cls.TextWrapper, {
                    [cls.PinCenter]: pinCenter,
                })}
            >
                <Text
                    preset={textPreset}
                    className={cmcl(cls.Text, { [cls.ToggledText]: toggled })}
                >
                    {right}
                </Text>
            </div>
        </div>
    );
};
