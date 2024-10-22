import { useAppSelector } from "app/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageProps } from "shared/config/Pages";
import { Paths } from "shared/config/Paths";
import { URLs } from "shared/consts/urls";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { ImageUploader } from "widgets/ImageUploader/ui/ImageUploader";
import { UserChangeAboutPanel } from "widgets/UserChangeAboutPanel/UserChangeAboutPanel";
import { UserChangeNamePanel } from "widgets/UserChangeNamePanel/UserChangeNamePanel";
import { UserChangePasswordPanel } from "widgets/UserChangePasswordPanel/ui/UserChangePasswordPanel";
import * as cls from "./SettingsPage.module.scss";

const SettingsPage = ({ tabTitle }: PageProps) => {
    usePageTitle(tabTitle);
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.user.isAuth);
    useEffect(() => {
        if (!isAuth) navigate(Paths.PRODUCTS_PATH);
    }, []);
    return (
        <div className={cls.SettingsPage}>
            <ImageUploader
                formKey="avatar"
                url={URLs.CHANGEAVATAR_URL}
                doAfterUpload={() => window.location.reload()}
            />
            <UserChangeNamePanel />
            <UserChangePasswordPanel />
            <UserChangeAboutPanel />
        </div>
    );
};

export default SettingsPage;
