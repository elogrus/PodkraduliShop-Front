import type { Meta, StoryObj } from "@storybook/react";
import { ProductsList } from "./ProductsList";

const meta = {
    title: "widgets/ProductsList",
    component: ProductsList,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutTitle: Story = {
    args: {
        start: 0,
        count: 5,
    },
};

export const WithTitle: Story = {
    args: {
        title: "Some title",
        start: 0,
        count: 5,
    },
};
