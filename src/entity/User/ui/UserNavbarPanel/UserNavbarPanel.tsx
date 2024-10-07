import { useAppDispatch, useAppSelector } from "app/store/store";
import { PopupButton } from "features/PopupButton/ui/PopupButton";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./UserNavbarPanel.module.scss";
import { Text } from "shared/ui/Text/ui/Text";
import { TextColor, TextPreset } from "shared/ui/Text/types/Text";
import { Link } from "shared/ui/Link/Link";
import { Paths } from "shared/config/Paths";
import { Button, ButtonPreset } from "shared/ui/Button/Button";
import { URLs } from "shared/consts/urls";
import { removeUser } from "entity/User/slice/UserSlice";
import { useNavigate } from "react-router-dom";

interface UserNavbarPanelProps {
    className?: string;
}

export const UserNavbarPanel = (props: UserNavbarPanelProps) => {
    const { className, ...otherProps } = props;
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogoutButtonClick = () => {
        dispatch(removeUser());
        navigate("/products");
    };

    return (
        <div
            className={cmcl(cls.UserNavbarPanel, {}, [className])}
            {...otherProps}
        >
            {user.isAuth ? (
                <PopupButton
                    contentWrapperClassName={cls.popupContainer}
                    button={
                        <div className={cls.button}>
                            <Text
                                preset={TextPreset.REGULAR}
                                color={TextColor.CL0}
                            >
                                {user.name}
                            </Text>
                            <img
                                className={cls.miniAvatar}
                                // src={URLs.USER_AVATAR_MINI_WITHOUT_ID + user.id}
                                src={URLs.USER_AVATAR_MINI_WITHOUT_ID}
                            ></img>
                        </div>
                    }
                    openToHor="left"
                    openToVert="bottom"
                >
                    <div className={cls.content}>
                        <Link to={Paths.PROFILE_PATH}>Профиль</Link>
                        <Link to={Paths.SETTINGS_PATH}>Настройки</Link>
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
