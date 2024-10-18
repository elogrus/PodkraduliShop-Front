import type { Meta, StoryObj } from "@storybook/react";
import { store } from "app/store/store";
import { Provider } from "react-redux";
import { UserRoleList } from "./UserRoleList";
import { UserRole } from "entity/User/types/User";

const meta = {
    title: "entity/User/UserRoleList",
    component: UserRoleList,
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
} satisfies Meta<typeof UserRoleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        roles: [UserRole.ADMIN, UserRole.USER],
    },
};
