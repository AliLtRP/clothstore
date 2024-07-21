import { useNavigate } from "react-router-dom";
import { CardsIndexSvg, NextSVG } from "./icons";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const Card = ({ banners }) => {
    const navigator = useNavigate();
    const [current, setCurrent] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImg = () => {
        if (current < banners.length - 1) {
            setDirection(1);
            setCurrent(current + 1);
            setImgIndex(imgIndex + 1); // Use the state setter function correctly
        }
    }

    const prevImg = () => {
        if (current > 0) {
            setDirection(-1);
            setCurrent(current - 1);
            setImgIndex(imgIndex - 1); // Use the state setter function correctly
        }
    }

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    console.log(banners, 'banner');

    return (
        <div className="h-[230px] flex w-full overflow- relative ">
            <div className="h-full absolute inset-0 flex flex-col px-4">
                <div className="absolute left-0 h-[100%] w-16" onClick={prevImg} />
                <img src={banners[current].img[0].src} alt="banners" className="h-[200px] w-full object-cover rounded-xl" />
                <div className="absolute right-0 h-[100%] w-6" onClick={nextImg} />

                <div className="h-full absolute w-[40%] text-[#fff] top-2/4 left-28 py-2 -translate-x-2/4 -translate-y-2/4 font-bold">
                    <p className="">{banners[current].title} <span className="font-normal block pt-1.5 pb-3">{banners[current].description}</span> </p>
                    <button className="border-[1px] rounded-md border-[#fff] text-xs p-2 flex gap-1 items-center">Shop Now <NextSVG /> </button>
                </div>

                <div className="w-full flex justify-center pt-4">
                    <CardsIndexSvg />
                </div>
            </div>
        </div>
    );
};

export default Card;
