import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleSwitcher } from "./ToggleSwitcher";

const meta = {
    title: "shared/ToggleSwitcher",
    component: ToggleSwitcher,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof ToggleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular = {
    render: function Render() {
        const [toggled, setToggled] = useState(false);
        return <ToggleSwitcher toggled={toggled} setToggled={setToggled} />;
    },
};
