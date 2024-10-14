import { UserNavbarPanel } from "entity/User/ui/UserNavbarPanel/UserNavbarPanel";
import { NavbarItems } from "shared/config/Navbar";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Link } from "shared/ui/Link/Link";
import { TextColor } from "shared/ui/Text/types/Text";
import { Logo } from "../../../../shared/ui/Logo/Logo";
import * as cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Navbar, {}, [className])} {...otherProps}>
            <nav className={cls.NavbarContainer}>
                <Link className={cls.NavbarLeft} to="/">
                    <Logo textColor="WHITE" />
                </Link>
                <div className={cls.NavbarRight}>
                    {NavbarItems.map((item) => {
                        return (
                            <Link
                                key={item.name}
                                textProps={{ color: TextColor.CL0 }}
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <UserNavbarPanel />
                </div>
            </nav>
        </div>
    );
};
