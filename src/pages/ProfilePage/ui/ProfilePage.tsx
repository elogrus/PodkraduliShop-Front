import { useParams } from "react-router-dom";
import { UserProfile } from "widgets/UserProfile/ui/UserProfile";
import * as cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
    const { userId } = useParams();
    return (
        <div className={cls.ProfilePage}>
            <UserProfile userId={userId} />
        </div>
    );
};

export default ProfilePage;
