import { getProductBySlug } from "@/actions/products";
import ProductDescription from "@/components/products/ProductDescription";
import SingleProduct from "@/components/products/SingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getProductBySlug(params?.slug);



    return (
        <main className="mt-[72px] lg:mt-[150px]">
            <SingleProduct product={product?.data} />
            <ProductDescription product={product?.data} />
        </main>
    );
};

export default SingleProductPage;