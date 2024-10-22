import type { Meta, StoryObj } from "@storybook/react";
import { store } from "app/store/store";
import { UserRole as RoleEnum } from "entity/User/types/User";
import { Provider } from "react-redux";
import { UserRole } from "./UserRole";

const meta = {
    title: "entity/User/UserRole",
    component: UserRole,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <Provider store={store}>
                <div style={{ width: "800px", height: "200px" }}>
                    <Story />
                </div>
            </Provider>
        ),
    ],
} satisfies Meta<typeof UserRole>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
    args: {
        role: RoleEnum.USER,
    },
};

export const Admin: Story = {
    args: {
        role: RoleEnum.ADMIN,
    },
};
