import { ProductType } from "entity/Product/types/Product";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./Attributes.module.scss";

interface AttributesProps {
    className?: string;
    product: ProductType;
}

export const Attributes = (props: AttributesProps) => {
    const { className, product, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Attributes, {}, [className])} {...otherProps}>
            <Text preset={TextPreset.SUBTITLE} mods={[TextMods.BOLD]}>
                О товаре
            </Text>
            <div className={cls.List}>
                {product.attributes.map((attr) => (
                    <div key={attr.title} className={cls.ListItem}>
                        <Text preset={TextPreset.REGULAR}>{attr.title}</Text>
                        <Text className={cls.Value} preset={TextPreset.REGULAR}>
                            {typeof attr.value === "boolean"
                                ? attr.value
                                    ? "Да"
                                    : "Нет"
                                : attr.value}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
