import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./UserRoleList.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { TextPreset } from "shared/ui/Text/types/Text";

interface UserRoleListProps {
    className?: string;
    roles: string[];
}

export const UserRoleList = (props: UserRoleListProps) => {
    const { className, roles, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.UserRoleList, {}, [className])}
            {...otherProps}
        >
            {roles.map((role) => (
                <div className={cls.roleContainer}>
                    <Text preset={TextPreset.REGULAR}>{role}</Text>
                </div>
            ))}
        </div>
    );
};
