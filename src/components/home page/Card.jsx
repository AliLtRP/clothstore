import { useNavigate } from "react-router-dom";
import { CardsIndexSvg, NextSVG } from "./icons";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

export const IMAGES = [
    "https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/269318/pexels-photo-269318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/3640668/pexels-photo-3640668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/3570733/pexels-photo-3570733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
];

const Card = ({ banners }) => {
    const navigator = useNavigate();
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImg = () => {
        if (current < IMAGES.length - 1) {
            setDirection(1);
            setCurrent(current + 1);
        }
    }

    const prevImg = () => {
        if (current > 0) {
            setDirection(-1);
            setCurrent(current - 1);
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

    return (
        <MotionConfig transition={{ duration: 0.5, ease: [1, 0.72, 1, 1] }}>
            <div className="h-[225px] flex w-full overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out transform">

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            className="rounded-xl flex flex-nowrap"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <button className="absolute left-0" onClick={prevImg}>prev</button>
                            <img src={IMAGES[current]} alt="banners" className="h-full w-full object-cover rounded-xl" />
                            <button className="absolute right-0" onClick={nextImg}>next</button>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute w-[40%] text-[#fff] top-10 left-5 font-bold">
                        <p className="">{banners[0].title} <span className="font-normal block pt-1.5 pb-3">{banners[0].description}</span> </p>
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
