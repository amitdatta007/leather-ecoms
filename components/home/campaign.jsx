import Image from "next/image";
import campaignImg from '@/assets/campaign.webp'
import Link from "next/link";

const Campaign = () => {
    return (
        <section className="mt-10 wrapper flex flex-col items-center sm:flex-row gap-10">

            <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col justify-center items-start gap-4">
                <div className="flex flex-wrap h-fit gap-2">
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">39</div>
                        <div className="text-xs text-text-muted-25">Sc</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">39</div>
                        <div className="text-xs text-text-muted-25">Sc</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">39</div>
                        <div className="text-xs text-text-muted-25">Sc</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">39</div>
                        <div className="text-xs text-text-muted-25">Sc</div>
                    </div>
                </div>
                <h3 className="text-2xl lg:text-[26px] font-semibold">☢️ Jitben Fan Fair ☢️</h3>
                <p className="text-paragraph">Best Rechargeable Fans Deal in Bangladesh. Get upto 67% Discount.</p>
                <Link href='/' className="bg-primary hover:bg-primary-muted py-3.5 px-7 text-white text-sm font-semibold">VIEW CAMPAIGN</Link>
            </div>
            <Link href='/' className="w-full sm:w-1/2 md:w-3/4">
                <Image className="w-full aspect-square md:aspect-auto" alt="" src={campaignImg} />
            </Link>
        </section>
    );
};

export default Campaign;