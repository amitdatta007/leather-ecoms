"use client"

import Image from "next/image";
import campaignImg from '@/assets/campaign.webp'
import Link from "next/link";
import { useEffect, useState } from "react";
import getImageUrl from "@/utils/getImageUrl";

const Campaign = ({ campaign }) => {

    // const [promotionTimer, setPromotionTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState({});
    const [targetDate, setTargetDate] = useState(new Date(campaign?.end_date));



    const calculateTimeLeft = () => {
        const now = new Date();
        const end = new Date(targetDate);
        const totalSeconds = Math.floor((end - now) / 1000);

        if (totalSeconds <= 0) {
            return null;
        }

        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const totalDays = Math.floor(totalSeconds / (3600 * 24));

        const months = Math.floor(totalDays / 30); // approximate
        const days = totalDays % 30;

        return { months, days, hours, minutes, seconds };
    };

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [targetDate]);

    return (
        <section className="mt-10 wrapper flex flex-col items-center sm:flex-row gap-10">

            <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col justify-center items-start gap-4">
                <div className="flex flex-wrap h-fit gap-2">
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">{timeLeft?.months}</div>
                        <div className="text-xs text-text-muted-25">Months</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">{timeLeft?.days}</div>
                        <div className="text-xs text-text-muted-25">Days</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">{timeLeft?.minutes}</div>
                        <div className="text-xs text-text-muted-25">Mins</div>
                    </div>
                    <div className="bg-primary p-1.5 flex flex-col justify-center items-center w-12 lg:w-14 h-12 lg:h-14">
                        <div className="text-lg text-white font-bold">{timeLeft?.seconds}</div>
                        <div className="text-xs text-text-muted-25">Sec</div>
                    </div>
                </div>
                <h3 className="text-2xl lg:text-[26px] font-semibold">{campaign?.campaign_name}</h3>
                <p className="text-paragraph">{campaign?.remarks}</p>
                <Link href={`/campaign/${campaign?.id}`} className="bg-primary hover:bg-primary-muted py-3.5 px-7 text-white text-sm font-semibold">VIEW CAMPAIGN</Link>
            </div>
            <Link href='/' className="w-full sm:w-1/2 md:w-3/4">
                <Image className="w-full aspect-square md:aspect-auto" alt="" src={getImageUrl(campaign?.img)} width={600} height={400} />
            </Link>
        </section>
    );
};

export default Campaign;