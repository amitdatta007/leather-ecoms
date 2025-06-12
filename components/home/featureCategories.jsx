"use client"

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import catImg from '@/assets/cat.webp';
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../shared/others/SectionTitle";
import Link from "next/link";
import getImageUrl from "@/utils/getImageUrl";

const FeatureCategories = ({ categories }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);


    const slider = useRef(null);

    const handleNext = () => {
        if (slider.current && slider.current.swiper) {
            slider.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (slider.current && slider.current.swiper) {
            slider.current.swiper.slidePrev();
        }
    };

    return (
        <section className="wrapper mt-10 flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <SectionTitle title='FEATURED CATEGORIES' />

                <div className="flex">
                    <button onClick={handlePrev} disabled={isBeginning} className={isBeginning ? "opacity-50" : ""}>
                        <ChevronLeft strokeWidth={1} size={32} />
                    </button>
                    <button onClick={handleNext} disabled={isEnd} className={isEnd ? "opacity-50" : ""}>
                        <ChevronRight strokeWidth={1} size={32} />
                    </button>
                </div>
            </div>
            <div>
                <Swiper
                    className="cat-slider"
                    modules={[Navigation, Pagination]}
                    spaceBetween={12}
                    navigation
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span className="${className} custom-dot"></span>`;
                        }
                    }}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        860: { slidesPerView: 8 },
                    }}
                    ref={slider}
                    onInit={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}

                >
                    {
                        categories?.map((category, i) => (
                            <SwiperSlide key={i}>
                                <Link href={`/products?categories=${category?.slug}`} className="p-4 border border-black/10 flex flex-col items-center gap-4 group pb-6">
                                    <Image alt="" src={getImageUrl(category?.img)} width={80} height={80} className="aspect-square w-[84px] group-hover:scale-110" />
                                    <h4 className="text-xs font-bold text-center">{category?.name}</h4>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                    
                </Swiper>
            </div>

        </section>
    );
};

export default FeatureCategories;