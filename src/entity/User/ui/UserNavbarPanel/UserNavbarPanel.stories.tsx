import type { Meta, StoryObj } from "@storybook/react";
import { store, useAppDispatch } from "app/store/store";
import { Provider } from "react-redux";
import { UserNavbarPanel } from "./UserNavbarPanel";
import { removeUser, setUserByJwt } from "entity/User/slice/UserSlice";

const meta = {
    title: "entity/UserNavbarPanel",
    component: UserNavbarPanel,
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
} satisfies Meta<typeof UserNavbarPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Auth: Story = {
    render: () => {
        const dispatch = useAppDispatch();
        dispatch(
            setUserByJwt(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNvbWVJRGJsYWJsYSIsIm5hbWUiOiJWYWxlcmFFbWFlIiwicm9sZSI6W119.XPPJ7MIP7p6bBL9xQQ76cq-1-e37fms4z6fTO3o3nNE"
            )
        );
        return <UserNavbarPanel />;
    },
};

export const NotAuth: Story = {
    render: () => {
        const dispatch = useAppDispatch();
        dispatch(removeUser());
        return <UserNavbarPanel />;
    },
};
