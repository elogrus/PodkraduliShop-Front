import { PageProps } from "shared/config/Pages";
import { usePageTitle } from "shared/hooks/usePageTitle";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { ProductsList } from "widgets/ProductsList/ui/ProductsList";
import * as cls from "./ProductsPage.module.scss";

interface ProductsPageProps extends PageProps {
    className?: string;
}

const ProductsPage = (props: ProductsPageProps) => {
    const { className, title, ...otherProps } = props;
    usePageTitle(title);
    return (
        <div
            className={cmcl(cls.ProductsPage, {}, [className])}
            {...otherProps}
        >
            <ProductsList title="Самые классные" />
            <ProductsList title="Самые продаваемые" />
            <ProductsList title="Еще какие-то" />
        </div>
    );
};

export default ProductsPage;
