import { UserRole as UserRoleEnum } from "entity/User/types/User";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextPreset } from "../../../../shared/ui/Text/types/Text";
import { Text } from "../../../../shared/ui/Text/ui/Text";
import * as cls from "./UserRole.module.scss";

interface UserRoleProps {
    className?: string;
    role: UserRoleEnum;
}

export const UserRole = (props: UserRoleProps) => {
    const { className, role, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.Role, {}, [cls[role], className])}
            {...otherProps}
        >
            <Text className={cls[role + "Text"]} preset={TextPreset.REGULAR}>
                {role}
            </Text>
        </div>
    );
};
