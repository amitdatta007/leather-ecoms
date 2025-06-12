import { getProductBySlug } from "@/actions/products";
// import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
// import RelalatedProducts from "./RelalatedProducts";
// import ProductInfo from "./productInfo";

const SingleProduct = async ({ slug, product }) => {
    // const product = await getProductBySlug(slug);


    return (
        <>
            <div className='wrapper flex flex-col lg:flex-row gap-4 md:gap-12 overflow-hidden pt-10'>
                <ProductSlider img={product?.img} />
                <ProductInfo product={product} />
            </div>
            {/* <ProductDetails description={product?.data?.description} />z */}
            {/* <RelalatedProducts products={product?.data?.relatedProducts} /> */}
        </>
    );
};

export default SingleProduct;