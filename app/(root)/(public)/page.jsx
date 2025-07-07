import { getBanners } from "@/actions/others";
import { getBrands, getCampaigns, getCategories, getProducts } from "@/actions/products";
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

    const [categories, brands, banners, featureProducts, campaigns] = await Promise.all([
        getCategories(),
        getBrands(),
        getBanners(),
        getProducts({
            sort_by: 'latest',
            limit: 12
        }),
        getCampaigns(),
    ]);


    return (
        <main className="bg-[#FFFCF4] mt-[72px] lg:mt-[150px]">
            <Banner banners={banners?.data} />
            <Services />

            {
                campaigns?.data?.map((campaign, i) => (
                    <Campaign key={i} campaign={campaign}  />
                ))
            }



            <FeatureProducts products={featureProducts?.data} />
            <FeatureCategories categories={categories?.data} />
            {/* <SecondaryBanner /> */}


            
            {/* <ShowProductsInSlide category={showCategory1} /> */}

            <ProductByCategories categories={categories?.data} />

            <TopBrands brands={brands?.data} />
        </main>
    );
};

export default HomePage;