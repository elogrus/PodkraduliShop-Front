import { LogoIcon } from "shared/ui/Icons/LogoIcon/LogoIcon";
import * as cls from "./Logo.module.scss";
import { Text } from "shared/ui/Text/ui/Text";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextColor, TextPreset } from "../Text/types/Text";

interface LogoProps {
    className?: string;
    textColor?: "WHITE" | "BLACK";
}

export const Logo = (props: LogoProps) => {
    const { className, textColor = "BLACK", ...otherProps } = props;
    return (
        <div className={cmcl(cls.Logo, {}, [className])} {...otherProps}>
            <LogoIcon className={cls.LogoIcon} />
            <Text
                preset={TextPreset.LOGO}
                color={textColor === "WHITE" ? TextColor.CL0 : TextColor.CL5}
            >
                Podkraduli Shop
            </Text>
        </div>
    );
};
