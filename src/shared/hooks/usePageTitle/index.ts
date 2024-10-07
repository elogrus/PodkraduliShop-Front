import { useEffect } from "react";
import { StringsConsts } from "shared/consts/string";

export const usePageTitle = (title?: string) => {
    useEffect(() => {
        if (title) {
            document.title = title + StringsConsts.PAGE_TITLE_PART;
        } else {
            document.title = StringsConsts.PAGE_TITLE;
        }
    }, []);
};
