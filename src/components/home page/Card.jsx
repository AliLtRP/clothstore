import { useNavigate } from "react-router-dom";
import { CardsIndexSvg, NextSVG } from "./icons";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

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
        <MotionConfig transition={{ duration: 0.5, ease: [1, 0.72, 1, 1] }}>
            <div className="h-[225px] flex w-full overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out transform">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            className="rounded-xl h-full flex flex-nowrap"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <div className="absolute left-0 h-[100%] w-16" onClick={prevImg} />
                            <img src={banners[current].img[0].src} alt="banners" className="h-full w-full object-cover rounded-xl" />
                            <div className="absolute right-0 h-[100%] w-6" onClick={nextImg} />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute w-[40%] text-[#fff] top-10 left-5 font-bold">
                        <p className="">{banners[current].title} <span className="font-normal block pt-1.5 pb-3">{banners[current].description}</span> </p>
                        <button className="border-[1px] rounded-md border-[#fff] text-xs p-2 flex gap-1 items-center">Shop Now <NextSVG /> </button>
                    </div>

                    <div className="w-full flex justify-center pt-4">
                        <CardsIndexSvg />
                    </div>
                </div>
            </div>
        </MotionConfig>
    );
};

export default Card;
