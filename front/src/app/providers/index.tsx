import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../store/store";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};
