import type { Meta, StoryObj } from "@storybook/react";
import { StatusInput } from "./StatusInput";
import { useRef, useState } from "react";

const meta = {
    title: "features/StatusInput",
    component: StatusInput,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof StatusInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular = {
    render: function Render() {
        const [status, setStatus] = useState(null);
        const ref = useRef(null);
        return (
            <StatusInput ref={ref} placeholder="Placeholder" status={status} />
        );
    },
};

export const Bad = {
    render: function Render() {
        const [status, setStatus] = useState(false);
        const ref = useRef(null);
        return (
            <StatusInput ref={ref} placeholder="Placeholder" status={status} />
        );
    },
};

export const Good = {
    render: function Render() {
        const [status, setStatus] = useState(true);
        const ref = useRef(null);
        return (
            <StatusInput ref={ref} placeholder="Placeholder" status={status} />
        );
    },
};
