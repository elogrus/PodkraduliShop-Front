import { ReactElement, useEffect, useRef, useState } from 'react';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Button } from '../Button/Button';
import ArrowIcon from 'shared/assets/arrow.svg';
import * as cls from './Carousel.module.scss';
import { getCssVariable } from 'shared/lib/getCssVariable';

interface CarouselProps {
    className?: string;
    elements: ReactElement[];
    scrollLength?: number;
    gapBetweenElements?: number;
    vertical?: boolean;
}

export const Carousel = (props: CarouselProps) => {
    const { className, elements, gapBetweenElements = 7, scrollLength = 100, vertical = false, ...otherProps } = props;
    const [linePos, setLinePos] = useState(0)
    const [isButtonHidden, setIsButtonHidden] = useState(false)
    const CarouselLineRef = useRef<HTMLDivElement>(null)
    const CarouselWindowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (vertical) {
            if (CarouselLineRef.current.getBoundingClientRect().height <= CarouselWindowRef.current.getBoundingClientRect().height) setIsButtonHidden(true)
        } else {
            if (CarouselLineRef.current.getBoundingClientRect().width <= CarouselWindowRef.current.getBoundingClientRect().width) setIsButtonHidden(true)
        }
        
    }, [elements])

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
        CarouselWindowRef.current.scrollBy(scrollByOptionsPrev)
        if (linePos !== 0) setLinePos((prev) => prev - 1)

    }

    const scrollNext = () => {
        CarouselWindowRef.current.scrollBy(scrollByOptionsNext)
        if (linePos !== elements.length - 1) setLinePos((prev) => prev + 1)
    }

    return (
        <div className={cmcl(cls.Carousel, { [cls.Vertical]: vertical, [cls.NoButtons]: isButtonHidden }, [className])} {...otherProps}>
            <Button className={cls.Button} onClick={scrollPrev}>
                <ArrowIcon className={cls.Arrow} />
            </Button>
            <div className={cls.CarouselWindow} ref={CarouselWindowRef}>
                <div style={{ gap: gapBetweenElements }} className={cls.CarouselLine} ref={CarouselLineRef}>
                    {elements}
                </div>
            </div>
            <Button className={cls.Button} onClick={scrollNext}>
                <ArrowIcon fill={getCssVariable('--cl5')} className={cls.Arrow} />
            </Button>
        </div >
    );
};
