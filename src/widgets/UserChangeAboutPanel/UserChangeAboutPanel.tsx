import { useAppDispatch, useAppSelector } from "app/store/store";
import { changeAbout } from "entity/User/lib/actions";
import { StatusInput } from "features/StatusInput/ui/StatusInput";
import { useRef, useState } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserChangeAboutPanel.module.scss";
import { StatusTextarea } from "features/StatusTextarea/ui/StatusTextarea";
import { toast } from "react-toastify";

interface UserChangeAboutPanelProps {
    className?: string;
}

export const UserChangeAboutPanel = (props: UserChangeAboutPanelProps) => {
    const { className, ...otherProps } = props;
    const curAbout = useAppSelector((state) => state.user.about);
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState<boolean | null>(null);
    const [isBlockSumbit, setIsBlockSumbit] = useState(false);
    const [error, setError] = useState("");
    const ref = useRef(null);

    const onChangeAbout = async () => {
        const about = ref.current.value;
        if (!about) {
            setStatus(false);
            return;
        }

        changeAbout(
            about,
            (result) => {
                setIsBlockSumbit(false);
                setError(result.error);
            },
            () => {
                setError("");
                toast.success("Готово!");
            },
            dispatch
        );
    };
    const onFocus: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if (status != null) setStatus(null);
    };
    return (
        <div
            className={cmcl(cls.UserChangeAboutPanel, {}, [className])}
            {...otherProps}
        >
            {error && <Text>{error}</Text>}
            <Text className={cls.title} preset={TextPreset.SUBTITLE}>
                О себе
            </Text>
            <StatusTextarea
                ref={ref}
                status={status}
                onFocus={onFocus}
                defaultValue={curAbout}
                style={{ resize: "vertical", minHeight: "5em" }}
            />
            <Button
                onClick={onChangeAbout}
                disabled={isBlockSumbit}
                className={cls.btn}
            >
                Сохранить
            </Button>
        </div>
    );
};
