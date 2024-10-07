import { useAppSelector } from "app/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "shared/config/Paths";
import { AuthForm } from "widgets/AuthForm/ui/AuthForm";
import * as cls from "./AuthPage.module.scss";

const AuthPage = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.user.isAuth);
    useEffect(() => {
        if (isAuth) navigate(Paths.PRODUCTS_PATH);
    }, []);

    return (
        <div className={cls.AuthPage}>
            <AuthForm />
        </div>
    );
};

export default AuthPage;
