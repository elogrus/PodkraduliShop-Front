import { lazy } from "react";
import { delayForDemoLazy } from "shared/lib/delayForDemoLazy";

export const SettingsPageAsync = lazy(() =>
    delayForDemoLazy(import("./SettingsPage"))
);
