const SectionTitle = ({ title }) => {
    return (
        <div className="flex items-center">
            <div className="bg-primary text-white font-bold px-4 py-2 text-lg">
                {title}
            </div>
            <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[22px] border-t-transparent border-b-transparent border-l-primary"></div>
        </div>
    );
};

export default SectionTitle;