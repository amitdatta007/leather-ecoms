import SectionTitle from "../shared/others/SectionTitle";
import CategoryWiseProduct from "./CategoryWiseProduct";

const ProductByCategories = ({ categories }) => {

    const showCategory1 = categories[0] | {};
    const showCategory2 = categories[1] | {};
    const showCategory3 = categories[2] | {};

    return (
        <section className="wrapper mt-10 flex flex-col gap-6">
            <SectionTitle title='Explore Popular Products By Categories' />
            <div className="flex flex-col gap-8">
                <CategoryWiseProduct category={showCategory1} />
                <CategoryWiseProduct category={showCategory2} />
                <CategoryWiseProduct category={showCategory3} />
            </div>
        </section>
    );
};

export default ProductByCategories;