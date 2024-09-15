import { FC, MouseEvent, ReactNode, useRef } from 'react';
import * as cls from './Zoom.module.scss';
import { compareClasses as cmcl } from 'shared/lib/classNames';

interface ZoomProps {
    className?: string;
    children: ReactNode;
    zoomMultiply?: number;
}

export const Zoom = (props: ZoomProps) => {
    const { className, children, zoomMultiply = 2, ...otherProps } = props;
    const containerRef = useRef<HTMLDivElement>()
    const wrapperRef = useRef<HTMLDivElement>()
    const enterPos = useRef<{ x: number, y: number }>({ x: 0, y: 0 })

    const onMouseEnter = (e: MouseEvent) => {
        containerRef.current.style.transform = `scale(${zoomMultiply})`
        const bounds = wrapperRef.current.getBoundingClientRect();
        enterPos.current = { x: e.clientX - bounds.left, y: e.clientY - bounds.top }
        console.log('current', enterPos.current.x, enterPos.current.y)
        console.log('bounds', bounds.width, bounds.height)
    }

    const onMouseMove = (e: MouseEvent) => {
        const bounds = wrapperRef.current.getBoundingClientRect();

        const enterPosX = enterPos.current.x;
        const enterPosY = enterPos.current.y;

        const nowPosX = e.clientX - bounds.left;
        const nowPosY = e.clientY - bounds.top;

        const posX = -(nowPosX - enterPosX / zoomMultiply);
        const posY = -(nowPosY - enterPosY / zoomMultiply);

        containerRef.current.style.transform = `scale(${zoomMultiply}) translate(${posX}px, ${posY}px)`
    }

    const onMouseLeave = (e: MouseEvent) => {
        containerRef.current.style.transform = `scale(1)`
    }

    return (
        <div ref={wrapperRef} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={cmcl(cls.Zoom, {}, [className])} {...otherProps}>
            <div ref={containerRef} className={cls.Container}>
                {children}
            </div>
        </div>
    );
};
