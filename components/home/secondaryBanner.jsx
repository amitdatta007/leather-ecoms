import watch from '@/assets/watch.webp';
import Image from 'next/image';

const SecondaryBanner = () => {
    return (
        <section className="wrapper mt-10 flex flex-col md:flex-row gap-5">
            <div className="w-full">
                <Image alt='' src={watch} />
            </div>
            <div className="w-full">
                <Image alt='' src={watch} />
            </div>
        </section>
    );
};

export default SecondaryBanner;