import type { Meta, StoryObj } from "@storybook/react";
import { CardProduct } from "./CardProduct";
import { Currency } from "shared/types/Currency";

const meta = {
    title: "shared/CardProduct",
    component: CardProduct,
    parameters: {
        layout: "centered",
    },
    args: {
        product: {
            id: 2,
            imagesCount: 0,
            title: "Подкрадули",
            description: "Нереально мощные",
            price: 1000,
            currency: Currency.RUB,
            //@ts-ignore
            attributes: [],
        },
    },
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutDiscount: Story = {
    args: {
        product: {
            id: 1,
            imagesCount: 0,
            title: "Подкрадули",
            description: "Нереально мощные",
            price: 1000,
            currency: Currency.RUB,
            attributes: [],
        },
    },
};

export const WithDiscount: Story = {
    args: {
        product: {
            id: 2,
            discount: 20,
            imagesCount: 0,
            title: "Подкрадули",
            description: "Нереально мощные",
            price: 1000,
            currency: Currency.RUB,
            attributes: [],
        },
    },
};
