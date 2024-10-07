import { useState } from 'react';
import * as cls from './ToggleSwitcher.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface ToggleSwitcherProps {
    className?: string;
    onToggle?: (toggleTo: boolean) => void;
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleSwitcher = (props: ToggleSwitcherProps) => {
    const { className, toggled, setToggled, onToggle = () => { }, ...otherProps } = props;

    const onClick = () => {
        onToggle(!toggled)
        setToggled((prev) => !prev)
    }

    return (
        <div onClick={onClick} className={cmcl(cls.ToggleSwitcher, {}, [className])} {...otherProps}>
            <div className={cmcl(cls.Slider, { [cls.ToggledSlider]: toggled })}></div>
        </div>
    );
};
