import type { Meta, StoryObj } from "@storybook/react";
import { DetailProduct } from "./DetailProduct";
import { Currency } from "shared/types/Currency";

const meta = {
    title: "entity/DetailProduct/DetailProduct",
    component: DetailProduct,
    parameters: {
        layout: "centered",
    },
    args: {
        productId: "cat1",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "800px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof DetailProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        productId: "cat1",
    },
};

export const OnError: Story = {
    args: {
        productId: "not_exist_id",
    },
};
