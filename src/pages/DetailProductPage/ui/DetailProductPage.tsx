import { useParams } from "react-router-dom";
import { PageProps } from "shared/config/Pages";
import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./DetailProductPage.module.scss";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { Product } from "widgets/Product/Product";

interface DetailProductPageProps extends PageProps {
    className?: string;
}

const DetailProductPage = (props: DetailProductPageProps) => {
    usePageTitle();
    const { className, ...otherProps } = props;
    const params = useParams<"id">();

    return (
        <div
            className={cmcl(cls.DetailProductPage, {}, [className])}
            {...otherProps}
        >
            <Product productId={params.id} />
        </div>
    );
};

export default DetailProductPage;
