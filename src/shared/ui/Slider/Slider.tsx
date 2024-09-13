import { ReactElement, useRef, useState } from 'react';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Button } from '../Button/Button';
import * as cls from './Slider.module.scss';
import { ArrowIcon } from '../Icons/ArrowIcon/ArrowIcon';
import { rotate } from '../Loader/Loader.module.scss';

interface SliderProps {
    className?: string;
    elements: ReactElement[];
    scrollLength?: number;
    gapBetweenElements?: number;
    vertical?: boolean;
}

export const Slider = (props: SliderProps) => {
    const { className, elements, gapBetweenElements = 7, scrollLength = 100, vertical = false, ...otherProps } = props;
    const [linePos, setLinePos] = useState(0)
    const sliderLineRef = useRef<HTMLDivElement>(null)

    const scrollByOptionsPrev: ScrollToOptions = {
        left: vertical ? 0 : -scrollLength,
        top: vertical ? -scrollLength : 0,
        behavior: 'smooth'
    }

    const scrollByOptionsNext: ScrollToOptions = {
        left: vertical ? 0 : scrollLength,
        top: vertical ? scrollLength : 0,
        behavior: 'smooth'
    }

    const scrollPrev = () => {
        sliderLineRef.current.scrollBy(scrollByOptionsPrev)
        if (linePos !== 0) setLinePos((prev) => prev - 1)

    }

    const scrollNext = () => {
        sliderLineRef.current.scrollBy(scrollByOptionsNext)
        if (linePos !== elements.length - 1) setLinePos((prev) => prev + 1)
    }

    return (
        <div className={cmcl(cls.Slider, { [cls.Vertical]: vertical }, [className])} {...otherProps}>
            <Button className={cls.Button} onClick={scrollPrev}>
                <ArrowIcon className={cls.Arrow} />
            </Button>
            <div className={cls.SliderWindow} ref={sliderLineRef}>
                <div style={{ gap: gapBetweenElements }} className={cls.SliderLine}>
                    {elements}
                </div>
            </div>
            <Button className={cls.Button} onClick={scrollNext}>
                <ArrowIcon className={cls.Arrow} />
            </Button>
        </div >
    );
};
