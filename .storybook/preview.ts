import type { Preview } from "@storybook/react";

import '../src/app/App.module.scss'
import '../src/shared/themes/primary/styles/colors.scss';
import '../src/shared/themes/primary/styles/fonts.scss';
import '../src/shared/themes/primary/styles/styles.scss';
import { ReactRouterDomDecorator } from "./decorators/ReactRouterDomDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        }
    },
    decorators: [
        ReactRouterDomDecorator
    ]
};

export default preview;
