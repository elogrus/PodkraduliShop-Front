import { DetailProductImage } from 'entity/DetailProduct/types/DetailProduct';
import { useMemo, useState } from 'react';
import { compareClasses as cmcl } from 'shared/lib/classNames';
import { Button, ButtonPreset } from 'shared/ui/Button/Button';
import { Carousel } from 'shared/ui/Carousel/Carousel';
import { LazyImg } from 'features/LazyImg/LazyImg';
import { Zoom } from 'features/Zoom/Zoom';
import * as cls from './ImagesLooker.module.scss';

interface ImagesLookerProps {
    className?: string;
    imagesURL: DetailProductImage[]
}

export const ImagesLooker = (props: ImagesLookerProps) => {
    const { className, imagesURL, ...otherProps } = props;
    const [pos, setPos] = useState(0)

    const onChangePos = (index: number) => {
        setPos(index)
    }

    const generatedMini = useMemo(() => {
        return imagesURL.map((image, index) => (
            <Button key={image.imageURL} preset={ButtonPreset.CLEAR} className={cls.MiniButton}>
                <LazyImg onClick={() => onChangePos(index)} url={image.miniURL ? image.miniURL : image.imageURL} className={cls.MiniImage} />
            </Button>
        )
        )
    }, [imagesURL])

    return (
        <div className={cmcl(cls.ImagesLooker, {}, [className])} {...otherProps}>
            <Carousel vertical={true} scrollLength={150} gapBetweenElements={7} className={cls.Carousel} elements={generatedMini} />
            {/* <Zoom > */}
            <LazyImg url={imagesURL[pos].imageURL} className={cls.Image} ImageWrapper={Zoom} ImageWrapperProps={{ className: cls.Image }} />
            {/* </Zoom> */}
        </div>
    );
};
