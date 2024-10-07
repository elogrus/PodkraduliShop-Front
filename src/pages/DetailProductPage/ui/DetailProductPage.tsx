import { DetailProduct } from "entity/DetailProduct";
import { useParams } from "react-router-dom";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./DetailProductPage.module.scss";
import { useEffect } from "react";
import { getProductById } from "entity/DetailProduct/lib/requests";
import { URLs } from "shared/consts/urls";

interface DetailProductPageProps {
    className?: string;
}

const DetailProductPage = (props: DetailProductPageProps) => {
    const { className, ...otherProps } = props;
    const params = useParams<"id">();

    return (
        <div
            className={cmcl(cls.DetailProductPage, {}, [className])}
            {...otherProps}
        >
            <DetailProduct productId={params.id} />
        </div>
    );
};

export default DetailProductPage;
