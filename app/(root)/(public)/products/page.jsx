import { getCategories } from "@/actions/products";
import Filter from "@/components/products/filters/Filter";
import ShowProducts from "@/components/products/ShowProducts";
import Breadcrumb from "@/components/shared/others/Breadcrumb";

const ProductsPage = async ({ searchParams }) => {

    const [categories] = await Promise.all([
        getCategories(),
    ]);

    return (
        <main className="mt-[72px] lg:mt-[150px]">
            <Breadcrumb title='Products' />
            <section className="wrapper my-10 flex gap-10">
                <div className="hidden md:block w-[24%]">
                    <Filter searchParams={searchParams} categories={categories?.data} />
                </div>
                <div className="w-full md:w-[76%]">
                    <ShowProducts searchParams={searchParams} />
                </div>
            </section>
        </main>
    );
};

export default ProductsPage;