import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonPreset } from "./Button";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    args: {
        children: "Button hehe",
        onClick: action("clicked"),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        children: "Button hehe",
        onClick: action("clicked"),
    },
};

export const Red: Story = {
    args: {
        children: "Button hehe",
        onClick: action("clicked"),
        preset: ButtonPreset.RED,
    },
};

export const Clear: Story = {
    args: {
        children: "Button hehe",
        onClick: action("clicked"),
        preset: ButtonPreset.CLEAR,
    },
};
