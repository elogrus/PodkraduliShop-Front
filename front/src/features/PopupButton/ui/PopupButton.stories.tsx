import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "shared/ui/Text/ui/Text";
import { PopupButton } from "./PopupButton";

const meta = {
    title: "features/PopupButton",
    component: PopupButton,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof PopupButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentBottomRight: Story = {
    args: {
        children: (
            <div style={{ width: 100, height: 100, backgroundColor: "#eee" }}>
                Inner
            </div>
        ),
        button: <Text>Click me</Text>,
    },
};

export const ContentBottomLeft: Story = {
    args: {
        children: (
            <div style={{ width: 100, height: 100, backgroundColor: "#eee" }}>
                Inner
            </div>
        ),
        button: <Text>Click me</Text>,
        openToVert: "bottom",
        openToHor: "left",
    },
};

export const ContentTopRight: Story = {
    args: {
        children: (
            <div style={{ width: 100, height: 100, backgroundColor: "#eee" }}>
                Inner
            </div>
        ),
        button: <Text>Click me</Text>,
        openToVert: "top",
        openToHor: "right",
    },
};

export const ContentTopLeft: Story = {
    args: {
        children: (
            <div style={{ width: 100, height: 100, backgroundColor: "#eee" }}>
                Inner
            </div>
        ),
        button: <Text>Click me</Text>,
        openToVert: "top",
        openToHor: "left",
    },
};
