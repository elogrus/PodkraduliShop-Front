import { Currency } from "shared/types/Currency";

export interface ProductAttribute {
    title: string;
    value: string | number | boolean;
}

export interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: Currency;
    discount?: number;
    attributes: ProductAttribute[];
    imagesCount: number;
}
