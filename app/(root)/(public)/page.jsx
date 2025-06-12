import { getBanners } from "@/actions/others";
import { getBrands, getCategories, getProducts } from "@/actions/products";
import Banner from "@/components/home/Banner";
import Campaign from "@/components/home/campaign";
import FeatureCategories from "@/components/home/featureCategories";
import FeatureProducts from "@/components/home/FeatureProducts";
import ProductByCategories from "@/components/home/productByCategories";
import SecondaryBanner from "@/components/home/secondaryBanner";
import Services from "@/components/home/services";
import ShowProductsInSlide from "@/components/home/ShowProductsInSlide";
import TopBrands from "@/components/home/topBrands";

const HomePage = async () => {

    const [categories, brands, banners, featureProducts, showProduct1, showProduct2, showProduct3] = await Promise.all([
        getCategories(),
        getBrands(),
        getBanners(),
        getProducts({
            sort_by: 'latest',
            limit: 12
        }),
    ]);


    return (
        <main className="bg-[#FFFCF4] mt-[72px] lg:mt-[150px]">
            <Banner banners={banners?.data} />
            <Services />
            {/* <Campaign /> */}
            <FeatureProducts products={featureProducts?.data} />
            <FeatureCategories categories={categories?.data} />
            {/* <SecondaryBanner /> */}

    
{/* 
            <ShowProductsInSlide category={showCategory1} />
            <ShowProductsInSlide category={showCategory2} />
            <ShowProductsInSlide category={showCategory3} /> */}

            <ProductByCategories categories={categories?.data} />

            <TopBrands brands={brands?.data} />
        </main>
    );
};

export default HomePage;