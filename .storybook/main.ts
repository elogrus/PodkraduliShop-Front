import type { StorybookConfig } from "@storybook/react-webpack5";
import webpackConfig from "../webpack.config";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: (config, options) => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        const rules = [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ];
        // @ts-ignore
        config.module.rules.push(...rules);

        // @ts-ignore
        if (configType === "PRODUCTION")
            config.plugins.push(new MiniCssExtractPlugin());

        // @ts-ignore
        config.resolve.plugins = [new TsconfigPathsPlugin()];

        // Return the altered config
        return config;
    },
};
export default config;
