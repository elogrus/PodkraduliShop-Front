import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "./Product";

const meta = {
    title: "entity/Product/Product",
    component: Product,
    parameters: {
        layout: "centered",
    },
    args: {
        productId: 0,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "800px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        productId: 0,
    },
};

export const OnError: Story = {
    args: {
        productId: -2,
    },
};
