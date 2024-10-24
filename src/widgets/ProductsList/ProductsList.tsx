import { getProductsList } from "entity/Product/lib/requests";
import { ProductType } from "entity/Product/types/Product";
import { CardProduct } from "entity/Product/ui/CardProduct/CardProduct";
import { useMemo, useState } from "react";
import { useLoading } from "shared/hooks/useLoading";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { Select } from "shared/ui/Select/Select";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./ProductsList.module.scss";

interface ProductsListProps {
    className?: string;
    title?: string;
    start: number;
    count: number;
}

enum FilterValues {
    ALPHABET_DOWN = "A-Z",
    ALPHABET_UP = "Z-A",
    CHEAP = "cheap",
    EXPENSIVE = "expensive",
}

export const ProductsList = (props: ProductsListProps) => {
    const { className, title = "", start, count, ...otherProps } = props;
    const { isLoading, result } = useLoading(getProductsList, [start, count]);
    const [filter, setFilter] = useState<FilterValues>(
        FilterValues.ALPHABET_DOWN
    );

    let filteredResult = useMemo<ProductType[]>(() => {
        if (result && result.data) {
            switch (filter) {
                case FilterValues.ALPHABET_DOWN:
                    return result.data.sort((a, b) =>
                        a.title.localeCompare(b.title)
                    );
                case FilterValues.ALPHABET_UP:
                    return result.data.sort((a, b) =>
                        b.title.localeCompare(a.title)
                    );
                case FilterValues.CHEAP:
                    return result.data.sort((a, b) =>
                        b.price < a.price ? 1 : -1
                    );
                case FilterValues.EXPENSIVE:
                    return result.data.sort((a, b) =>
                        b.price > a.price ? 1 : -1
                    );
                default:
                    return [];
            }
        }
    }, [result, filter]);

    return (
        <div
            className={cmcl(cls.ProductsList, {}, [className])}
            {...otherProps}
        >
            <div className={cls.Top}>
                {title && <Text preset={TextPreset.TITLE}>{title}</Text>}
                <Select
                    options={[
                        {
                            title: "По алфавиту ↓",
                            value: FilterValues.ALPHABET_DOWN,
                        },
                        {
                            title: "По алфавиту ↑",
                            value: FilterValues.ALPHABET_UP,
                        },
                        { title: "Дешевле", value: FilterValues.CHEAP },
                        { title: "Дороже", value: FilterValues.EXPENSIVE },
                    ]}
                    setValue={setFilter}
                />
            </div>

            <div className={cmcl(cls.List, { [cls.LoadingList]: isLoading })}>
                {isLoading && <Loader />}
                {!isLoading && result.error && (
                    <Text preset={TextPreset.SUBTITLE}>
                        Произошла ошибка: {result.error}
                    </Text>
                )}
                {!isLoading &&
                    result.data &&
                    filteredResult.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    ))}
            </div>
        </div>
    );
};
