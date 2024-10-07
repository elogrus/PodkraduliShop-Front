import { lazy } from "react";
import { delayForDemoLazy } from "shared/lib/delayForDemoLazy";

export const ProfilePageAsync = lazy(() =>
    delayForDemoLazy(import("./ProfilePage"))
);
