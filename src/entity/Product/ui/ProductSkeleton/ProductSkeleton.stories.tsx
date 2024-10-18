import type { Meta, StoryObj } from "@storybook/react";
import { ProductSkeleton } from "./ProductSkeleton";

const meta = {
    title: "entity/Product/ProductSkeleton",
    component: ProductSkeleton,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: "800px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ProductSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};
