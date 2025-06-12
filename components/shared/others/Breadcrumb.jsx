const Breadcrumb = ({ title }) => {
    return (
        <section className='bg-black'>
            <div className='wrapper py-6 md:py-12 xl:py-20'>
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
            </div>
        </section>
    );
};

export default Breadcrumb;