"use client"

import Slider from "react-slick";
import Image from "next/image";
import getImageUrl from "@/utils/getImageUrl";
import productImage from "@/assets/product.webp"


const ProductSlider = ({ img }) => {




    const setting = {
        customPaging: function (i) {
            return (
                <a>
                    <Image width={50} height={75} src={getImageUrl(img[i])} alt="" />
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <div className="w-full lg:w-[50%] relative pl-0 pb-[100px] md:pb-0 md:pl-[140px] ">
            <div className="slider-container relative product-slider">
                <Slider {...setting} className="w-full aspect-[4/5] pro-slider">
                    {
                        img?.map((image, i) => {
                            return (
                                <Image className="w-full h-full object-cover" width={200} height={300} src={getImageUrl(image)} key={i} alt="" />
                            )
                        })
                    }

                  
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;