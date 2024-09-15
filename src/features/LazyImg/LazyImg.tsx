import { FC, HTMLProps, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Loader } from '../../shared/ui/Loader/Loader';
import * as cls from './LazyImg.module.scss';

interface LazyImgProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    url: string;
    ImageWrapper?: FC;
    ImageWrapperProps?: Record<string, any>
}

export const LazyImg = (props: LazyImgProps) => {
    const { className, url, ImageWrapper = ({ children }: HTMLProps<any>) => <>{children}</>, ImageWrapperProps = {}, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(false);
    const imgRef = useRef<HTMLImageElement>()

    const onLoad = () => {
        setIsLoading(false)
    }

    // If the image is cached then fetching does not happen, so onLoad does not fire
    // So to check, if cached image is ready, looking at img.complete option
    useEffect(() => {
        if (imgRef.current.complete) {
            onLoad();
        } else {
            setIsLoading(true)
        }
    }, [url])

    return (
        <div className={cmcl(cls.LazyImg, {}, [className])} {...otherProps}>
            <Loader style={{ display: isLoading ? "block" : "none" }} />
            <ImageWrapper style={{ display: isLoading ? "none" : 'block' }} {...ImageWrapperProps}>
                <img loading='lazy' ref={imgRef} onLoad={onLoad} onError={onLoad} src={url} className={cls.Img} />
            </ImageWrapper>
        </div>
    );
};
