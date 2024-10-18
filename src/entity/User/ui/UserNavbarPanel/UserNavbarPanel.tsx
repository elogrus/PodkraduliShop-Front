import { useAppDispatch, useAppSelector } from "app/store/store";
import axios from "axios";
import { removeUser } from "entity/User/slice/UserSlice";
import {
    PopupButton,
    PopupButtonRef,
} from "features/PopupButton/ui/PopupButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "shared/config/Paths";
import { URLs } from "shared/consts/urls";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button, ButtonPreset } from "shared/ui/Button/Button";
import { Link } from "shared/ui/Link/Link";
import { TextColor, TextMods, TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserNavbarPanel.module.scss";
import { toast } from "react-toastify";

interface UserNavbarPanelProps {
    className?: string;
}

export const UserNavbarPanel = (props: UserNavbarPanelProps) => {
    const { className, ...otherProps } = props;
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const popupButtonRef = useRef<PopupButtonRef>(null);

    const onClick = () => {
        popupButtonRef.current.close();
    };

    const onLogoutButtonClick = async () => {
        try {
            await axios.post(URLs.LOGOUT_URL);
            dispatch(removeUser());
            navigate("/products");
        } catch (error) {
            // show some error, need to create notification modal component
            toast.error("Случилась какая-то ошибка");
            popupButtonRef.current.close();
        }
    };

    return (
        <div
            className={cmcl(cls.UserNavbarPanel, {}, [className])}
            {...otherProps}
        >
            {user.isAuth ? (
                <PopupButton
                    ref={popupButtonRef}
                    contentWrapperClassName={cls.popupContainer}
                    button={
                        <div className={cls.button}>
                            <Text
                                preset={TextPreset.REGULAR}
                                mods={[TextMods.BOLD]}
                                color={TextColor.CL0}
                            >
                                {user.name}
                            </Text>
                            <img
                                className={cls.miniAvatar}
                                src={URLs.USER_AVATAR_MINI_WITHOUT_ID + user.id}
                            ></img>
                        </div>
                    }
                    openToHor="left"
                    openToVert="bottom"
                >
                    <div className={cls.content}>
                        <Link
                            onClick={onClick}
                            to={Paths.PROFILE_PATH_WITHOUT_ID + user.id}
                        >
                            Профиль
                        </Link>
                        <Link onClick={onClick} to={Paths.SETTINGS_PATH}>
                            Настройки
                        </Link>
                        <hr />
                        <Button
                            onClick={onLogoutButtonClick}
                            preset={ButtonPreset.RED}
                        >
                            Выйти
                        </Button>
                    </div>
                </PopupButton>
            ) : (
                <Link className={cls.loginButton} to={Paths.AUTH_PATH}>
                    Войти
                </Link>
            )}
        </div>
    );
};
