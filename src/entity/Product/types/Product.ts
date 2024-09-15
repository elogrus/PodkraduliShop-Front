import { Currency } from "shared/types/Currency";

export type ProductType = {
    id: string;
    imageURL: string;
    title: string;
    description: string;
    price: number;
    currency: Currency;
    discount?: number;
}