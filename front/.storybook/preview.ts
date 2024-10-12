import type { Preview } from "@storybook/react";

import "../src/app/App.module.scss";
import "../src/shared/themes/primary/styles/colors.scss";
import "../src/shared/themes/primary/styles/fonts.scss";
import "../src/shared/themes/primary/styles/styles.scss";
import { ReactRouterDomDecorator } from "./decorators/ReactRouterDomDecorator";
import { ReduxDecorator } from "./decorators/ReduxDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            values: [
                // 👇 Default values
                { name: "Dark", value: "#333" },
                { name: "Light", value: "#F7F9F2" },
                // 👇 Add your own
                { name: "Maroon", value: "#400" },
            ],
            // 👇 Specify which background is shown by default
            default: "Light",
        },
        previewTabs: {
            docs: { hidden: true },
        },
    },
    decorators: [ReactRouterDomDecorator, ReduxDecorator],
};

export default preview;
