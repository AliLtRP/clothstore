import { useNavigate } from "react-router-dom";
import { CardsIndexSvg, NextSVG } from "./icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Card = ({ banners }) => {
    const navigator = useNavigate();
    const [current, setCurrent] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrent(swiper.activeIndex);
    };


    console.log(banners);
    
    return (
        <div className="h-[230px] flex w-full overflow-hidden relative">
            <div className="h-full absolute inset-0 flex flex-col px-4 z-0">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}
                    className="w-full z-0"
                >
                    {
                        banners.map((v, i) => {
                            const currentImg = v.img[0];
                            return (
                                <SwiperSlide key={i}>
                                    {currentImg ? (
                                        <>
                                            <img src={currentImg.src} alt="banners" className="h-[200px] w-full object-cover rounded-xl" />
                                            <div className="h-full absolute w-[40%] text-[#fff] top-2/4 left-24 py-2 -translate-x-2/4 -translate-y-2/4 font-bold">
                                                <p>{v.title} <span className="font-normal block pt-1.5 pb-3">{v.description}</span></p>
                                                <button className="border-[1px] rounded-md border-[#fff] text-xs p-2 flex gap-1 items-center">Shop Now <NextSVG /></button>
                                            </div>
                                        </>
                                    ) : (  
                                        <div className="h-[200px] w-full flex justify-center items-center text-white">
                                            <p>No Image Available</p>
                                        </div>
                                    )}
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <div className="w-full flex gap-1 justify-center pt-4">
                    {
                        banners.map((_, i) => (
                            <i 
                                key={i} 
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-[#FFA3B3] w-2.5 h-2.5' : 'bg-[#DEDBDB]'}`}
                            ></i>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
