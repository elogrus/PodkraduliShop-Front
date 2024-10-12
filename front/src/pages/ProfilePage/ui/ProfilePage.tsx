import { UserProfile } from "widgets/UserProfile/ui/UserProfile";
import * as cls from "./ProfilePage.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { useParams } from "react-router-dom";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className, ...otherProps } = props;
    let { userId } = useParams();
    return (
        <div className={cmcl(cls.ProfilePage, {}, [className])} {...otherProps}>
            {/* <UserProfile userId="someIDblabla"/> */}
            <UserProfile userId={userId} />
        </div>
    );
};

export default ProfilePage;
