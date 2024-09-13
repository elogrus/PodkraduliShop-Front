import { Currency } from "shared/types/Currency";

export type ProductType = {
    id: number;
    imageURL: string;
    title: string;
    description: string;
    price: number;
    currency: Currency;
    discount?: number;
    productUrl: string;
}