import { ClockSvg, NextSVG } from "./icons"


const Deal = () => {
    return (
        <div className="w-full h-16 bg-[#4392F9] rounded-lg flex justify-between px-3 items-center">
            <div className="text-white flex flex-col gap-1">
                <p className=" font-medium">Deal of the Day</p>

                <div className="w-full flex items-center gap-1.5">
                    <ClockSvg />
                    <p className=" text-xs">22h 55m 20s remaining </p>
                </div>
            </div>

            <button className="border-[1px] border-white rounded-[4px] font-semibold text-white text-xs flex gap-1 items-center px-[10px] py-[15px] h-[28px]">View all <NextSVG /></button>
        </div>
    )
}

export default Deal