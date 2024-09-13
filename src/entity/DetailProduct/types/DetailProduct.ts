import { Currency } from "shared/types/Currency";

export interface DetailProductAttribute {
    title: string;
    value: string | number | boolean;
}

export interface DetailProductImage {
    full: string;
    mini: string;
}

export interface DetailProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: Currency;
    discount?: number;
    attributes: DetailProductAttribute[];
    imagesURL: DetailProductImage[];
}

export interface DetailProductSchema {
    product: DetailProductType | null;
}