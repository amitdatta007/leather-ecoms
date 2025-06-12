"use client"

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../shared/others/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import getImageUrl from "@/utils/getImageUrl";

const TopBrands = ({ brands }) => {
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
                <SectionTitle title='TOP BRANDS' />

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
                    spaceBetween={20}
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
                        1024: { slidesPerView: 6 },
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
                        brands?.map((brand, i) => (
                            <SwiperSlide key={i}>
                                <Link href={`/products?brands=${brand?.slug}`} className="p-4">
                                    <Image alt="" src={getImageUrl(brand?.img)} width={400} height={200} className="w-full aspect-[4/2]" />
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default TopBrands;