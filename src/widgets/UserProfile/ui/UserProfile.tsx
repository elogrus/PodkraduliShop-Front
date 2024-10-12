import { useAppSelector } from "app/store/store";
import { getUserProfileInfo } from "entity/User/lib/requests";
import { User } from "entity/User/types/User";
import { UserRoleList } from "entity/User/ui/UserRoleList/UserRoleList";
import { useEffect, useState } from "react";
import { StringsConsts } from "shared/consts/string";
import { URLs } from "shared/consts/urls";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserProfile.module.scss";

interface UserProfileProps {
    userId: string;
    className?: string;
}

export const UserProfile = (props: UserProfileProps) => {
    const { className, userId, ...otherProps } = props;
    const authUser = useAppSelector((state) => state.user);
    const [user, setUser] = useState<User>();
    const [error, setError] = useState("");
    useEffect(() => {
        if (authUser.isAuth && userId === authUser.id) {
            document.title = authUser.name + StringsConsts.PAGE_TITLE_PART;
            setUser(authUser);
        } else {
            getUserProfileInfo(userId).then((res) => {
                if (res.error) return setError(res.error);
                setUser(res.data);
                document.title = res.data.name + StringsConsts.PAGE_TITLE_PART;
            });
        }
    }, [userId]);

    return (
        <div className={cmcl(cls.UserProfile, {}, [className])} {...otherProps}>
            {error ? (
                <Text>Произошла ошибка: {error} </Text>
            ) : user ? (
                <div className={cls.container}>
                    {/* <img src={URLs.USER_AVATAR_WITHOUT_ID + user.id}></img> */}
                    <div className={cls.left}>
                        <img
                            className={cls.avatar}
                            src={URLs.USER_AVATAR_WITHOUT_ID}
                        />
                    </div>
                    <div className={cls.right}>
                        <Text preset={TextPreset.TITLE}>{user.name}</Text>

                        <UserRoleList roles={user.role} />
                        <Text preset={TextPreset.REGULAR}>
                            Тут будет еще какая-то информация, пока хз какая
                        </Text>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};
