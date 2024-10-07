import type { Meta, StoryObj } from "@storybook/react";
import { TextToggleSwitcher } from "./TextToggleSwitcher";
import { Text } from "../Text/ui/Text";
import { useState } from "react";

const meta = {
    title: "shared/TextToggleSwitcher",
    component: TextToggleSwitcher,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div
                style={{
                    width: 500,
                    height: 100,
                    border: "1px solid red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TextToggleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular = {
    render: function Render() {
        const [toggled, setToggled] = useState(false);
        return (
            <TextToggleSwitcher
                left={<Text>Left</Text>}
                right={<Text>Something Right</Text>}
                toggled={toggled}
                setToggled={setToggled}
            />
        );
    },
};

export const PinCenter = {
    render: function Render() {
        const [toggled, setToggled] = useState(false);
        return (
            <TextToggleSwitcher
                left={<Text>Left</Text>}
                right={<Text>Something Right</Text>}
                toggled={toggled}
                setToggled={setToggled}
                pinCenter={true}
            />
        );
    },
};
