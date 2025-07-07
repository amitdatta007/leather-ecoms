import SectionTitle from "../shared/others/SectionTitle";
import CategoryWiseProduct from "./CategoryWiseProduct";

const ProductByCategories = ({ categories }) => {
    return (
        <section className="wrapper mt-10 flex flex-col gap-6">
            <SectionTitle title='Explore Popular Products By Categories' />
            <div className="flex flex-col gap-8">
                {
                    categories?.map((category, i) => <CategoryWiseProduct key={i} category={category} />)
                }        
            </div>
        </section>
    );
};

export default ProductByCategories;