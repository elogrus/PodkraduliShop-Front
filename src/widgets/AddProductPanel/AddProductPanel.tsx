import * as cls from './AddProductPanel.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface AddProductPanelProps {
    className?: string;
}

export const AddProductPanel = (props: AddProductPanelProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.AddProductPanel, {}, [className])} {...otherProps}>
            hello
        </div>
    );
};
