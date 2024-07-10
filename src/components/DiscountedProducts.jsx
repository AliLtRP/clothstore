import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackArrow } from "./trending products/icons";
import { Rating } from "./home page/icons";
import client from "../api/axios";
import { Container } from "./trending products";

const DiscountedProducts = () => {
    const navigator = useNavigate();
    const [data, setData] = useState([]);
    const { id, name } = useParams();

    const fetchData = async () => {
        try {
            const res = await client.get(`/product/discount`);
            setData(res.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const preprocessData = (data) => {
        const leftAlign = [];
        const rightAlign = [];
        data.forEach((item, index) => {
            if (index % 5 === 0 || index % 5 === 3 || index % 5 === 4) {
                leftAlign.push(item);
            } else {
                rightAlign.push(item);
            }
        });
        return { leftAlign, rightAlign };
    };

    const { leftAlign, rightAlign } = preprocessData(data);

    return (
        <div className="w-full flex flex-col mx-auto">
            <Container>
                <div className="flex items-center justify-between w-[65%] h-16 px-4">
                    <div onClick={() => navigator(-1)}>
                        <BackArrow className="h-5 w-[9.5px]" />
                    </div>
                    <p className="text-black font-semibold text-lg leading-4 h-5 pt-0.5 text-end">{name}</p>
                </div>
                <hr className="w-full" />
            </Container>

            <Container>
                <div className="w-full grid grid-cols-2 justify-between items-start gap-3 px-4 py-6">
                    <div>
                        {leftAlign.map((v, i) => (
                            <Link to={`/shop/${v.id}`} key={v.id}>
                                <div className="w-full min-h-[245px] h-auto rounded-lg mb-3 shadow-md">
                                    <img src={v.img[0].src} alt="" className="w-full h-[136px] rounded-lg object-cover" />
                                    <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                        <p className="font-medium w-[90%] text-base text-[10px] text-wrap overflow-hidden">{v.name}</p>
                                        <p className="font-normal text-[10px] w-[90%]">{v.description}</p>
                                        <p className="font-medium text-xs pt-0.5">{v.price}</p>
                                        <div className="w-full flex items-center gap-2 mb-1.5">
                                            <Rating />
                                            <p className="font-normal text-[10px]">{Math.floor(v.average_rating)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div>
                        {rightAlign.map((v, i) => (
                            <Link to={`/shop/${v.id}`} key={v.id}>
                                <div className="w-full min-h-[305px] h-auto rounded-lg mb-3 shadow-md">
                                    <img src={v.img[0].src} alt="" className="w-full h-[196px] rounded-lg object-cover" />
                                    <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                        <p className="font-medium w-[90%] text-base text-[10px] text-wrap overflow-hidden">{v.name}</p>
                                        <p className="font-normal text-[10px] w-[90%]">{v.description}</p>
                                        <p className="font-medium text-xs pt-0.5">{v.price}</p>
                                        <div className="w-full flex items-center gap-2 mb-1.5">
                                            <Rating />
                                            <p className="font-normal text-[10px]">{Math.floor(v.average_rating)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DiscountedProducts;
