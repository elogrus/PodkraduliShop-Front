import { compareClasses as cmcl } from "shared/lib/classNames";
import { UserRole } from "../UserRole/UserRole";
import * as cls from "./UserRoleList.module.scss";
import { UserRole as UserRoleEnum } from "entity/User/types/User";

interface UserRoleListProps {
    className?: string;
    roles: UserRoleEnum[];
}

export const UserRoleList = (props: UserRoleListProps) => {
    const { className, roles, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.UserRoleList, {}, [className])}
            {...otherProps}
        >
            {roles.map((role) => (
                <UserRole key={role} role={role} />
            ))}
        </div>
    );
};
