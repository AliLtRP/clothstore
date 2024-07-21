import hot_summer_sale from "../../assets/hot_summer_sale.png";
import { NextSVG } from "./icons";


const NewArrival = ({ title, description }) => {
    return (
        <div className="w-full h-[270px] bg-white px-4">
            <img src={hot_summer_sale} alt="" className=" rounded-t-lg h-[204px]" />

            <div className="w-full flex justify-between pt-4">
                <div>
                    <p className=" text-xl font-medium leading-[22px]">{title || "New Arrival"}</p>
                    <p className=" text-base font-normal leading-5 pt-2">{description || "Summer’ 25 Collections"}</p>
                </div>

                <div className="flex flex-col justify-end">
                    <button className="bg-[#F83758] py-[6px] px-[10px] rounded-[4px] text-xs font-semibold flex gap-1 items-center text-[#fff]">View all <NextSVG /></button>
                </div>
            </div>

        </div>
    )
}

export default NewArrival