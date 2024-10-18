import { useAppDispatch } from "app/store/store";
import { auth } from "entity/User/lib/actions";
import { validateAll, validatePassword } from "entity/User/lib/validate";
import { ModalWindow } from "features/ModalWindow/ui/ModalWindow";
import { StatusInput } from "features/StatusInput/ui/StatusInput";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button, ButtonPreset } from "shared/ui/Button/Button";
import { SmallLoader } from "shared/ui/SmallLoader/SmallLoader";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { TextToggleSwitcher } from "shared/ui/TextToggleSwitcher/TextToggleSwitcher";
import * as cls from "./AuthForm.module.scss";

interface AuthFormProps {
    className?: string;
}

export const AuthForm = (props: AuthFormProps) => {
    const { className, ...otherProps } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const refs = {
        name: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),
    };

    const [status, setStatus] = useState({
        name: null,
        password: null,
        confirmPassword: null,
    });

    const [isFormRegister, setIsFormRegister] = useState(false);
    const [error, setError] = useState<string>("");
    const [isBlockSumbit, setIsBlockSumbit] = useState(false);

    const tryAuth = async (isRegister: boolean) => {
        const name = refs.name.current.value;
        const password = refs.password.current.value;
        setIsBlockSumbit(true);

        let validationFailed = false;
        const validationResult = validateAll(name, password);
        if (validationResult.fail) {
            setStatus((prev) => ({
                ...prev,
                name: validationResult.name === true ? null : false,
                password: validationResult.password === true ? null : false,
            }));
            setIsBlockSumbit(false);
            validationFailed = true;
        }

        if (
            isRegister &&
            (!validatePassword(refs.confirmPassword.current.value) ||
                !refs.confirmPassword.current.value == password)
        ) {
            setStatus((prev) => ({ ...prev, confirmPassword: false }));
            setIsBlockSumbit(false);
            validationFailed = true;
        }
        if (validationFailed) return;

        auth(
            name,
            password,
            isRegister,
            (result) => {
                setIsBlockSumbit(false);
                setError(result.error);
                return;
            },
            () => {
                navigate("/products");
            },
            dispatch
        );
    };

    const onFocusName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (status.name != null) setStatus((prev) => ({ ...prev, name: null }));
    };

    const onFocusPassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (status.password != null)
            setStatus((prev) => ({ ...prev, password: null }));
    };

    const onFocusConfirmPassword: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        if (status.confirmPassword != null)
            setStatus((prev) => ({ ...prev, confirmPassword: null }));
    };

    const onToggleSwitcher = (toggleTo: boolean) => {
        // if toggle to "Register"
        if (toggleTo) {
            setStatus((prev) => ({ ...prev, confirmPassword: null }));
        }
    };

    const onSubmitLogin: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        tryAuth(false);
    };

    const onSumbitRegister = () => {
        tryAuth(true);
    };

    return (
        <div className={cmcl(cls.AuthForm, {}, [className])} {...otherProps}>
            <ModalWindow className={cls.Modal}>
                <TextToggleSwitcher
                    onToggle={onToggleSwitcher}
                    pinCenter={true}
                    left="Логин"
                    right="Регистрация"
                    textPreset={TextPreset.SUBTITLE}
                    toggled={isFormRegister}
                    setToggled={setIsFormRegister}
                />
                {error && <Text className={cls.Error}>{error}</Text>}
                <StatusInput
                    placeholder="Логин"
                    ref={refs.name}
                    onFocus={onFocusName}
                    status={status.name}
                />
                <StatusInput
                    placeholder="Пароль"
                    type="password"
                    ref={refs.password}
                    onFocus={onFocusPassword}
                    status={status.password}
                />
                {isFormRegister && (
                    <StatusInput
                        placeholder="Повтор пароля"
                        type="password"
                        ref={refs.confirmPassword}
                        onFocus={onFocusConfirmPassword}
                        status={status.confirmPassword}
                    />
                )}
                <Button
                    onClick={isFormRegister ? onSumbitRegister : onSubmitLogin}
                    className={cls.Button}
                    preset={ButtonPreset.REGULAR}
                    disabled={isBlockSumbit}
                >
                    {isBlockSumbit ? (
                        <SmallLoader />
                    ) : isFormRegister ? (
                        "Зарегистрироваться"
                    ) : (
                        "Войти"
                    )}
                </Button>
            </ModalWindow>
        </div>
    );
};
