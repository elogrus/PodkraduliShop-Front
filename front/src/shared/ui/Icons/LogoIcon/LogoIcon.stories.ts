import type { Meta, StoryObj } from "@storybook/react";
import { LogoIcon } from "./LogoIcon";

const meta = {
    title: "shared/Icons/LogoIcon",
    component: LogoIcon,
    parameters: {
        // layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};
