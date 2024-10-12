import { Loader } from "shared/ui/Loader/Loader";
import * as cls from "./LoadingPage.module.scss";
import { PageProps } from "shared/config/Pages";
import { usePageTitle } from "shared/hooks/usePageTitle";

export const LoadingPage = ({ title }: PageProps) => {
    usePageTitle(title);
    return (
        <div className={cls.LoadingPage}>
            <Loader />
        </div>
    );
};
