import AllProducts from "./AllProducts";
import Sort from "./filters/Sort";

const ShowProducts = ({ searchParams }) => {
    return (
        <section className="w-full">
            <div className="w-full flex justify-end">
                <Sort sort={searchParams?.sort_by}  />
            </div>
            <div>
                <AllProducts searchParams={searchParams} />
            </div>
        </section>
    );
};

export default ShowProducts;