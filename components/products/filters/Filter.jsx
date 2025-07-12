import FilterByCategories from "./FilterByCategories";
import FilterByPrice from "./FilterByPrice";

const Filter = ({ searchParams, categories }) => {

    return (
        <div className="w-full flex flex-col gap-6">
            <FilterByPrice min={0} max={20000} />
            <FilterByCategories allCategories={categories} catParams={searchParams?.categories} subCatParams={searchParams?.sub_categories} />
        </div>
    );
};

export default Filter;