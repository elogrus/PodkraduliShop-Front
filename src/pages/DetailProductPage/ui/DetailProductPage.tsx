import { useParams } from "react-router-dom";
import { PageProps } from "shared/config/Pages";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { Product } from "widgets/Product/Product";
import * as cls from "./DetailProductPage.module.scss";
const DetailProductPage = ({ tabTitle }: PageProps) => {
    usePageTitle(tabTitle);
    const params = useParams<"id">();

    return (
        <div className={cls.DetailProductPage}>
            <Product productId={Number(params.id)} />
        </div>
    );
};

export default DetailProductPage;
