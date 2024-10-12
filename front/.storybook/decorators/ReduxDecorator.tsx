import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/app/store/store";

export const ReduxDecorator = (Story) => (
    <Provider store={store}>
        <Story />
    </Provider>
);
