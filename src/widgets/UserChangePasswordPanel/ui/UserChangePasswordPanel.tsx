import { useAppDispatch } from "app/store/store";
import { changePassword } from "entity/User/lib/requests";
import { setUserByJwt } from "entity/User/slice/UserSlice";
import { StatusInput } from "features/StatusInput/ui/StatusInput";
import { useRef, useState } from "react";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { validatePassword } from "../lib/validateData";
import * as cls from "./UserChangePasswordPanel.module.scss";

interface UserChangePasswordPanelProps {
    className?: string;
}

export const UserChangePasswordPanel = (
    props: UserChangePasswordPanelProps
) => {
    const { className, ...otherProps } = props;
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState({
        oldPassword: null,
        password: null,
        confirmPassword: null,
    });
    const [isBlockSumbit, setIsBlockSumbit] = useState(false);
    const [error, setError] = useState("");
    const refs = {
        oldPassword: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),
    };

    const onChangePassword = async () => {
        const oldPassword = refs.oldPassword.current.value;
        const password = refs.password.current.value;
        const confirmPassword = refs.confirmPassword.current.value;

        const validateResult = validatePassword(
            oldPassword,
            password,
            confirmPassword
        );
        if (!validateResult.oldPassword)
            setStatus((prev) => ({ ...prev, oldPassword: false }));
        if (!validateResult.password)
            setStatus((prev) => ({ ...prev, password: false }));
        if (!validateResult.confirmPassword)
            setStatus((prev) => ({ ...prev, confirmPassword: false }));
        if (validateResult.failed) {
            setIsBlockSumbit(false);
            return;
        }

        const result = await changePassword(
            oldPassword,
            password,
            localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)
        );
        if (result.error) {
            setIsBlockSumbit(false);
            setError(result.error);
            return;
        }
        dispatch(setUserByJwt(result.data.access));
        setError("");
        alert("good");
    };

    const onFocusOldPassword: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        if (status.oldPassword != null)
            setStatus((prev) => ({ ...prev, oldPassword: null }));
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

    return (
        <div
            className={cmcl(cls.UserChangePasswordPanel, {}, [className])}
            {...otherProps}
        >
            <div className={cls.block}>
                {error && <Text>{error}</Text>}
                <Text className={cls.title} preset={TextPreset.SUBTITLE}>
                    Старый пароль
                </Text>
                <StatusInput
                    status={status.oldPassword}
                    ref={refs.oldPassword}
                    onFocus={onFocusOldPassword}
                />
            </div>
            <div className={cls.block}>
                <Text className={cls.title} preset={TextPreset.SUBTITLE}>
                    Новый пароль
                </Text>
                <StatusInput
                    onFocus={onFocusPassword}
                    status={status.password}
                    ref={refs.password}
                />
                <StatusInput
                    status={status.confirmPassword}
                    ref={refs.confirmPassword}
                    onFocus={onFocusConfirmPassword}
                />
                <Button
                    onClick={onChangePassword}
                    disabled={isBlockSumbit}
                    className={cls.btn}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};
