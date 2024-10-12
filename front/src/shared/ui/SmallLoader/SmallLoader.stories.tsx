import type { Meta, StoryObj } from "@storybook/react";
import { SmallLoader, SmallLoaderColor } from "./SmallLoader";

const meta = {
    title: "shared/SmallLoader",
    component: SmallLoader,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof SmallLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        color: SmallLoaderColor.LIGHT,
    },
};

export const Dark: Story = {
    args: {
        color: SmallLoaderColor.DARK,
    },
};
