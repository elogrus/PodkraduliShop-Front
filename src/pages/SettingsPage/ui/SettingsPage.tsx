import { useAppSelector } from "app/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageProps } from "shared/config/Pages";
import { Paths } from "shared/config/Paths";
import { usePageTitle } from "shared/hooks/usePageTitle";
import * as cls from "./SettingsPage.module.scss";
import { UserChangeNamePanel } from "widgets/UserChangeNamePanel/UserChangeNamePanel";
import { UserChangePasswordPanel } from "widgets/UserChangePasswordPanel/ui/UserChangePasswordPanel";

const SettingsPage = ({ title }: PageProps) => {
    usePageTitle(title);
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.user.isAuth);
    useEffect(() => {
        if (!isAuth) navigate(Paths.PRODUCTS_PATH);
    }, []);
    return (
        <div className={cls.SettingsPage}>
            <UserChangeNamePanel />
            <UserChangePasswordPanel />
        </div>
    );
};

export default SettingsPage;
