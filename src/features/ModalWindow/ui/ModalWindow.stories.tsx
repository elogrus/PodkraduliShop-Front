import type { Meta, StoryObj } from "@storybook/react";
import { ModalWindow } from "./ModalWindow";
import { Currency } from "shared/types/Currency";
import { ProductType } from "entity/Product/types/Product";
import { Text } from "shared/ui/Text/ui/Text";
import { Button } from "shared/ui/Button/Button";

const meta = {
    title: "features/ModalWindow",
    component: ModalWindow,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof ModalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        children: (
            <div>
                <Text>Hello!</Text>
                <Button style={{ marginTop: "15px" }}>Button</Button>
            </div>
        ),
    },
};
