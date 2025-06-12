import SingleProductLoading from "../prouduct/SingleProductLoading";

const SellsLoading = () => {
    return (
        <div className='py-6 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
            {
                [...Array(12).keys()]?.map((i) => (
                    <SingleProductLoading key={i} />
                ))
            }
        </div>
    );
};

export default SellsLoading;