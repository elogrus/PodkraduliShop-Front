import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { Input, InputPreset } from "./Input";

const meta = {
    title: "shared/Input",
    component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
    render: function Render() {
        const ref = useRef(null);
        return (
            <Input
                ref={ref}
                placeholder="Using ref but not state"
                preset={InputPreset.REGULAR}
            />
        );
    },
};

export const Regular = {
    render: function Render() {
        const [value, setValue] = useState("");
        return (
            <Input
                value={value}
                placeholder="Placeholder"
                onChange={(e) => setValue(e.target.value)}
                preset={InputPreset.REGULAR}
            />
        );
    },
};

export const Clear = {
    render: function Render() {
        const [value, setValue] = useState("");
        return (
            <Input
                value={value}
                placeholder="Placeholder"
                onChange={(e) => setValue(e.target.value)}
                preset={InputPreset.CLEAR}
            />
        );
    },
};
