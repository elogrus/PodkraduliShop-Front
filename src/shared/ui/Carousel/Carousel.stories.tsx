import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const elements = [
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: "pink" }}></div>,
];

const meta = {
    title: "shared/Carousel",
    component: Carousel,
    parameters: {
        layout: "centered",
    },
    args: {
        elements: elements,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 300 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        elements: elements,
    },
};

export const Vertical: Story = {
    args: {
        elements: elements,
        vertical: true,
    },
};

export const HaveEnoughtSpaceHorizontal: Story = {
    args: {
        elements: elements.slice(0, 4),
    },
};

export const HaveEnoughtSpaceVertical: Story = {
    args: {
        elements: elements.slice(0, 4),
        vertical: true,
    },
};
