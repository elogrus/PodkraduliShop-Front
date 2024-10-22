import React from "react";
import { BrowserRouter } from "react-router-dom";

export const ReactRouterDomDecorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
