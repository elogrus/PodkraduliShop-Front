import type { Meta, StoryObj } from "@storybook/react";
import { LazyImg } from "./LazyImg";

const meta = {
    title: "features/LazyImg",
    component: LazyImg,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 300 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof LazyImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        url: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
    },
};

export const OnLoading: Story = {
    args: {
        url: "https://localhost:3001/delay",
    },
};

export const OnError: Story = {
    args: {
        url: "https://not-exist-url/",
    },
};

export const SmallLoader: Story = {
    args: {
        url: "https://localhost:3001/delay",
        smallLoader: true,
    },
};
