import * as cls from "./Select.module.scss";
import { compareClasses as cmcl } from "shared/lib/classNames";

export interface Option {
    title: string;
    value: string;
}

export enum SelectPreset {
    REGULAR = "preset_regular",
    CLEAR = "preset_clear",
}

interface SelectProps {
    className?: string;
    options: Option[];
    preset?: SelectPreset;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        options,
        preset = SelectPreset.REGULAR,
        setValue,
        ...otherProps
    } = props;
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    return (
        <select
            onChange={onChange}
            className={cmcl(cls.Select, {}, [cls[preset], className])}
            {...otherProps}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
};
