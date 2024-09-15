import { HTMLProps } from 'react';
import * as cls from './Loader.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface LoaderProps extends HTMLProps<HTMLDivElement> {
    className?: string;
}

export const Loader = (props: LoaderProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Loader, {}, [className])} {...otherProps}></div>
    );
};
