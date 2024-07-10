import { useNavigate } from "react-router-dom";
import cardImage from "../../assets/cardImage.jpeg";
import { CardsIndexSvg, NextSVG } from "./icons";

const Card = ({ banners }) => {
    const navigator = useNavigate();

    return (
        <div className="h-[225px] flex w-full overflow-scroll overflow-x-auto">
            {banners && banners.map((v, i) => {
                return (
                    <div className="min-w-full h-[200px] relative">
                        <img src={v.img} alt="" className="h-full w-full object-cover rounded-xl" />

                        <div className="absolute w-[40%] text-[#fff] top-10 left-5 font-bold">
                            <p className="">{v.title} <span className="font-normal block pt-1.5 pb-3">{v.description}</span> </p>
                            <button className="border-[1px] rounded-md border-[#fff] text-xs p-2 flex gap-1 items-center" onClick={() => navigator(`/shop/${v.products_ids[2]}`)}>Shop Now <NextSVG /> </button>
                        </div>

                        <div className="w-full flex justify-center pt-4">
                            <CardsIndexSvg />
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Card