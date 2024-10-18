import { useAppDispatch, useAppSelector } from "app/store/store";
import { changeName } from "entity/User/lib/actions";
import { StatusInput } from "features/StatusInput/ui/StatusInput";
import { useRef, useState } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserChangeNamePanel.module.scss";

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

        changeName(
            name,
            (result) => {
                setIsBlockSumbit(false);
                setError(result.error);
            },
            () => {
                setError("");
                alert("good");
            },
            dispatch
        );
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
