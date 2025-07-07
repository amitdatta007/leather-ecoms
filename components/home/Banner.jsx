"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import getImageUrl from "@/utils/getImageUrl";

const Banner = ({ banners }) => {
    return (
        // <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <section className="wrapper">
            <div className="col-span-2">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        banners?.map((banner, i) => (
                            <SwiperSlide key={i}>
                                <div className="w-full aspect-[2/1] bg-primary">
                                    <Image
                                        alt=""
                                        src={getImageUrl(banner?.img)}
                                        width={800}
                                        height={400}
                                        className="w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {/* <div className="flex flex-row md:flex-col gap-3">
                <div className="w-full">
                    <Image alt="" src={banner} className="w-full" />
                </div>
                <div className="w-full">
                    <Image alt="" src={banner} className="w-full" />
                </div>
            </div> */}
        </section>
    );
};

export default Banner;