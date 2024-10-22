import { PageProps } from "shared/config/Pages";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { ProductsList } from "widgets/ProductsList/ProductsList";
import * as cls from "./ProductsPage.module.scss";

const ProductsPage = ({ tabTitle }: PageProps) => {
    usePageTitle(tabTitle);
    return (
        <div className={cls.ProductsPage}>
            <ProductsList title="Самые классные" start={0} count={8} />
            <ProductsList title="Самые продаваемые" start={0} count={8} />
            <ProductsList title="Еще какие-то" start={0} count={8} />
        </div>
    );
};

export default ProductsPage;
