import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextColor, TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./Price.module.scss";

interface PriceProps {
    className?: string;
    price: number;
    currency: string;
    discount?: number;
}

export const Price = (props: PriceProps) => {
    const { className, price, currency, discount = 0, ...otherProps } = props;

    return (
        <div className={cmcl(cls.Price, {}, [className])} {...otherProps}>
            <span className={cls.PriceText}>
                <Text
                    color={TextColor.CL0}
                    preset={TextPreset.SUBTITLE}
                    mods={[TextMods.BOLD]}
                >
                    {Math.floor((price / 100) * (100 - discount))}
                </Text>
                <Text
                    color={TextColor.CL0}
                    preset={TextPreset.SUBTITLE}
                    mods={[TextMods.BOLD]}
                >
                    {currency}{" "}
                </Text>
            </span>
            <span>
                {discount !== 0 && (
                    <>
                        <Text
                            color={TextColor.CL3}
                            preset={TextPreset.SMALL}
                            mods={[TextMods.CROSS, TextMods.BOLD]}
                        >
                            {price}
                        </Text>
                        <Text
                            color={TextColor.CL3}
                            preset={TextPreset.SMALL}
                            mods={[TextMods.CROSS, TextMods.BOLD]}
                        >
                            {currency}
                        </Text>
                    </>
                )}
            </span>
            <span>
                {discount !== 0 && (
                    <Text
                        color={TextColor.CL9}
                        preset={TextPreset.REGULAR}
                        mods={[TextMods.BOLD]}
                    >
                        -{discount}%
                    </Text>
                )}
            </span>
        </div>
    );
};
