import { ClockSvg, NextSVG } from "./icons";
import { useEffect, useState } from "react";

const Deal = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const endDate = new Date(endTime).getTime();
        const now = new Date().getTime();
        let timeRemaining = endDate - now;

        if (timeRemaining < 0) {
            timeRemaining = 0;
        }

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return {
            hours,
            minutes,
            seconds
        };
    }

    return (
        <>
            {
                timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0 ?
                    <div></div>
                    :
                    <div className="w-full h-16 bg-[#4392F9] rounded-lg flex justify-between px-3 items-center">
                        <div className="text-white flex flex-col gap-1">
                            <p className=" font-medium">Deal of the Day</p>

                            <div className="w-full flex items-center gap-1.5">
                                <ClockSvg />
                                <p className=" text-xs">{`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</p>
                            </div>
                        </div>

                        <button className="border-[1px] border-white rounded-[4px] font-semibold text-white text-xs flex gap-1 items-center px-[10px] py-[15px] h-[28px]">View all <NextSVG /></button>
                    </div>
            }
        </>
    );
};

export default Deal;
