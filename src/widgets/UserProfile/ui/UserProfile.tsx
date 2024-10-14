import { getUserProfileInfo } from "entity/User/lib/requests";
import { User } from "entity/User/types/User";
import { useEffect, useState } from "react";
import { StringsConsts } from "shared/consts/string";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserProfile.module.scss";
import { URLs } from "shared/consts/urls";
import { LazyImg } from "features/LazyImg/LazyImg";

interface UserProfileProps {
    userId: string;
    className?: string;
}

export const UserProfile = (props: UserProfileProps) => {
    const { className, userId, ...otherProps } = props;
    const [user, setUser] = useState<User>();
    const [error, setError] = useState("");
    useEffect(() => {
        getUserProfileInfo(userId).then((res) => {
            if (res.error) return setError(res.error);
            setUser(res.data);
            document.title = res.data.name + StringsConsts.PAGE_TITLE_PART;
        });
    }, [userId]);
    return (
        <div className={cmcl(cls.UserProfile, {}, [className])} {...otherProps}>
            {error ? (
                <Text>Произошла ошибка: {error} </Text>
            ) : user ? (
                <div className={cls.container}>
                    <div className={cls.left}>
                        <LazyImg
                            className={cls.avatar}
                            url={URLs.USER_AVATAR_WITHOUT_ID + userId}
                        />
                    </div>
                    <div className={cls.right}>
                        <Text preset={TextPreset.TITLE}>{user.name}</Text>

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
