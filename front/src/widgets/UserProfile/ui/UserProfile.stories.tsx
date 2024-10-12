import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "./UserProfile";

const meta = {
    title: "widgets/UserProfile",
    component: UserProfile,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        userId: "asd",
    },
};
