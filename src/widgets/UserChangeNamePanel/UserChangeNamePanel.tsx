import { setUserByJwt } from "entity/User/slice/UserSlice";
import * as cls from "./UserChangeNamePanel.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { changeName } from "entity/User/lib/requests";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store/store";
import { Text } from "shared/ui/Text/ui/Text";
import { TextPreset } from "shared/ui/Text/types/Text";
import { StatusInput } from "features/StatusInput/ui/StatusInput";
import { Button } from "shared/ui/Button/Button";

interface UserChangeNamePanelProps {
    className?: string;
}

export const UserChangeNamePanel = (props: UserChangeNamePanelProps) => {
    const { className, ...otherProps } = props;
    const username = useAppSelector((state) => state.user.name);
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState<boolean | null>(null);
    const [isBlockSumbit, setIsBlockSumbit] = useState(false);
    const [error, setError] = useState("");
    const ref = useRef(null);

    const onChangeName = async () => {
        const name = ref.current.value;
        if (!name || username == name) {
            setStatus(false);
            return;
        }

        const result = await changeName(
            name,
            localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)
        );
        if (result.error) {
            setIsBlockSumbit(false);
            console.log(result);
            setError(result.error);
            return;
        }
        dispatch(setUserByJwt(result.data.access));
        setError("");
        alert("good");
    };
    const onFocus: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (status != null) setStatus(null);
    };
    return (
        <div
            className={cmcl(cls.UserChangeNamePanel, {}, [className])}
            {...otherProps}
        >
            {error && <Text>{error}</Text>}
            <Text className={cls.title} preset={TextPreset.SUBTITLE}>
                Имя
            </Text>
            <StatusInput
                ref={ref}
                defaultValue={username}
                placeholder={username}
                status={status}
                onFocus={onFocus}
            />
            <Button
                onClick={onChangeName}
                disabled={isBlockSumbit}
                className={cls.btn}
            >
                Сохранить
            </Button>
        </div>
    );
};
