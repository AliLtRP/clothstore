import { Ratting } from "./icons"

const ProductCard = (props) => {
    return (
        <div className="min-w-[170px] h-[241px]">
            <img src={props.image} alt="product" className="h-[165px] w-full object-cover rounded-[4px]" />
            <p className=" text-xs font-medium pt-2">{props.title || "title"}</p>
            {
                props.desc && <p className=" text-[10px] font-normal pt-1.5">{props.desc}</p>
            }
            <div className="py-2">
                <p className=" text-xs font-medium">{props.price || "price"}</p>
                <p className="text-[#FE735C] text-[10px]"> <span className="text-[#BBBBBB] text-xs font-normal line-through pr-1">{props.off || "off"}</span> {props.percent} Off</p>
            </div>
            <div className="w-full flex items-center gap-1.5 mt-[-3px]">

                {
                    props.ratting &&
                    <>
                        <Ratting />
                        <p className="pt-0.5 text-[10px] text-[#A4A9B3] text-center">
                            {props.rating || "56890"}
                        </p>

                    </>
                }
            </div>
        </div>
    )
}

export default ProductCard