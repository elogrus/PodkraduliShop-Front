import { LazyImg } from "features/LazyImg/LazyImg";
import { Zoom } from "features/Zoom/Zoom";
import { useMemo, useState } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button, ButtonPreset } from "shared/ui/Button/Button";
import { Carousel } from "shared/ui/Carousel/Carousel";
import * as cls from "./ImagesLooker.module.scss";

export interface Image {
    imageURL: string;
    miniURL?: string;
}

interface ImagesLookerProps {
    className?: string;
    imagesURL: Image[];
}

export const ImagesLooker = (props: ImagesLookerProps) => {
    const { className, imagesURL, ...otherProps } = props;
    const [pos, setPos] = useState(0);
    if (imagesURL.length === 0) return <></>;

    const onChangePos = (index: number) => {
        setPos(index);
    };

    const generatedMini = useMemo(() => {
        return imagesURL.map((image, index) => (
            <Button
                key={image.imageURL}
                preset={ButtonPreset.CLEAR}
                className={cls.MiniButton}
            >
                <LazyImg
                    smallLoader={true}
                    onClick={() => onChangePos(index)}
                    url={image.miniURL || image.imageURL}
                    className={cls.MiniImage}
                />
            </Button>
        ));
    }, [imagesURL]);

    return (
        <div
            className={cmcl(cls.ImagesLooker, {}, [className])}
            {...otherProps}
        >
            <Carousel
                vertical={true}
                scrollLength={150}
                gapBetweenElements={7}
                className={cls.Carousel}
                elements={generatedMini}
            />
            <LazyImg
                url={imagesURL[pos].imageURL}
                className={cls.Image}
                ImageWrapper={Zoom}
                ImageWrapperProps={{ className: cls.Image }}
            />
        </div>
    );
};
