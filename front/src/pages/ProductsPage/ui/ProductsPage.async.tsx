import { lazy } from "react";
import { delayForDemoLazy } from "shared/lib/delayForDemoLazy";

export const ProductsPageAsync = lazy(() => delayForDemoLazy(import('./ProductsPage')))
