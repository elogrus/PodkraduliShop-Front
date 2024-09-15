import { Currency } from 'shared/types/Currency';
import { TextColor, TextMods, TextPreset } from 'shared/ui/Text/types/Text';
import { Text } from 'shared/ui/Text/ui/Text';
import * as cls from './Price.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface PriceProps {
    className?: string;
    price: number; // Price BEFORE discount
    currency: Currency;
    discount?: number; // %
}

export const Price = (props: PriceProps) => {
    const { className, price, currency, discount = 0, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Price, {}, [className])} {...otherProps}>
            <span>
                <Text color={TextColor.CL3} preset={TextPreset.SUBTITLE} mods={[TextMods.UNDERSCORE, TextMods.BOLD]}>{price / 100 * (100 - discount)}</Text>
                <Text color={TextColor.CL3} preset={TextPreset.SUBTITLE} mods={[TextMods.BOLD]}>{currency} </Text>
            </span>
            {discount !== 0 && <>
                <Text color={TextColor.CL3} preset={TextPreset.SMALL} mods={[TextMods.CROSS, TextMods.BOLD]}>{price}</Text>
                <Text color={TextColor.CL3} preset={TextPreset.SMALL} mods={[TextMods.CROSS, TextMods.BOLD]}>{currency}</Text>
            </>}
        </div>
    );
};
