import type { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./AuthForm";

const meta = {
    title: "widgets/AuthForm",
    component: AuthForm,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: "800px", height: "200px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};
