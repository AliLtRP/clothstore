import { useEffect, useState } from "react";
import { Rating } from "./icons";
import Skeleton from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [props]);

    return (
        <div className="min-w-[168px] h-[241px]">
            {loading ? (
                <Skeleton height={100} />
            ) : (
                <>
                    <LazyLoadImage
                        className="h-[165px] w-full object-cover rounded-[4px]"
                        src={props.image}
                        effect='opacity'
                        width="100%"
                    />
                    <p className="text-xs font-medium pt-2">{props.title || "title"}</p>
                    {props.desc && <p className="text-[10px] font-normal pt-1.5">{props.desc}</p>}
                    <div className="py-1.5">
                        <p className="text-xs font-medium">{props.price || "price"}</p>
                        <p className="text-[#FE735C] text-[10px]">
                            <span className="text-[#BBBBBB] text-xs font-normal line-through pr-1">
                                {props.off || "off"}
                            </span>
                            {props.percent} Off
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-1.5 mt-[-3px]">
                        {props.rating && (
                            <>
                                <Rating />
                                <p className="pt-0.5 text-[10px] text-[#A4A9B3] text-center">
                                    {props.rating || ""}
                                </p>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCard;
