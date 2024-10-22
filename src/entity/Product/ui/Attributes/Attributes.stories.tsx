import type { Meta, StoryObj } from "@storybook/react";
import { Currency } from "shared/types/Currency";
import { Attributes } from "./Attributes";

const meta = {
    title: "entity/Product/Attributes",
    component: Attributes,
    args: {
        product: {
            id: 2,
            imagesCount: 0,
            title: "Подкрадули",
            description: "Нереально мощные",
            price: 1000,
            currency: Currency.RUB,
            attributes: [
                { title: "Attr1", value: "hehe" },
                { title: "Attr2", value: true },
                { title: "Attr3", value: false },
                { title: "Attr4", value: 10 },
            ],
        },
    },
} satisfies Meta<typeof Attributes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        product: {
            id: 2,
            imagesCount: 0,
            title: "Подкрадули",
            description: "Нереально мощные",
            price: 1000,
            currency: Currency.RUB,
            attributes: [
                { title: "Text", value: "hehe" },
                { title: "Bool true", value: true },
                { title: "Bool false", value: false },
                { title: "Number", value: 10 },
            ],
        },
    },
};
