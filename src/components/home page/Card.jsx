import cardImage from "../../assets/cardImage.jpeg";
import { CardsIndexSvg, NextSVG } from "./icons";

const Card = () => {
    return (
        <div className="h-[225px]">
            <div className="w-full h-[200px] relative">
                <img src={cardImage} alt="" className="h-full object-cover rounded-xl" />

                <div className="absolute w-[40%] text-[#fff] top-10 left-5 font-bold">
                    <p className="">50-40% OFF <span className="font-normal block pt-1.5 pb-3">Now in (product) All colours</span> </p>
                    <button className="border-[1px] rounded-md border-[#fff] text-xs p-2 flex gap-1 items-center">Shop Now <NextSVG /> </button>
                </div>

                <div className="w-full flex justify-center pt-4">
                    <CardsIndexSvg />
                </div>
            </div>
        </div>

    )
}

export default Card