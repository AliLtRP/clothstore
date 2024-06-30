import { Link, useNavigate } from "react-router-dom"
import Container from "./Container"
import { BackArrow } from "./icons"
import sweater from "./assets/sweater.png";
import shirt from "./assets/shirt.png";
import dress from "./assets/dress.png";
import Embroide from "./assets/Embroide.png";
import flaredress from "./assets/flaredress.png";
import denimdress from "./assets/denimdress.png";
import { Rating } from "../home page/icons";

const TrendingProducts = () => {
    const navigator = useNavigate();

    const product = [{
        image: sweater,
        name: "Black Winter...",
        desc: "Autumn And Winter Casual cotton-padded jacket...",
        price: "₹499",
        rating: "6,890"
    }, {
        image: shirt,
        name: "Mens Starry",
        desc: "Mens Starry Sky Printed Shirt 100% Cotton Fabric",
        price: "₹399",
        rating: "1,52,344"
    }, {
        image: dress,
        name: "Black Dress",
        desc: "Solid Black Dress for Women, Sexy Chain Shorts Ladi...",
        price: "₹2,000",
        rating: "5,23,456"

    }, {
        image: Embroide,
        name: "Pink Embroide...",
        desc: "EARTHEN Rose Pink Embroidered Tiered Max...",
        price: "₹1,900",
        rating: "45,678"
    }, {
        image: flaredress,
        name: "Flare Dress",
        desc: "Antheaa Black & Rust Orange Floral Print Tiered Midi F...",
        price: "₹1,990",
        rating: "3,35,566"
    }, {
        image: denimdress,
        name: "denim dress",
        desc: "Blue cotton denim dress Look 2 Printed cotton dr...",
        price: "₹999",
        rating: "27,344"
    },]

    const len = product.length

    const leftAlign = product.filter((_, i) => i % len === 0 || i % len === 3 || i % len === 4)
    const rightAlign = product.filter((_, i) => !(i % len === 0 || i % len === 3 || i % len === 4))

    console.log(leftAlign);
    return (
        <div className="w-full flex flex-col mx-auto">
            <Container>
                <div className="flex items-center justify-between w-[65%] h-16 px-4">
                    <div onClick={() => navigator(-1)}>
                        <BackArrow className="h-5 w-[9.5px]" />
                    </div>
                    <p className=" text-black font-semibold text-lg leading-4 h-5 pt-0.5 text-end">Top Rate</p>
                </div>
                <hr className="w-full" />
            </Container>

            <Container>
                <div className="w-full grid grid-cols-2 justify-between items-start gap-3 px-4 py-6">
                    <div>
                        {
                            leftAlign && leftAlign.map((v, i) => {
                                return (
                                    <Link to={`/shop/${v.id}`}>
                                        <div className="w-full h-[245px] rounded-lg mb-3 shadow-md">
                                            <img src={v.image} alt="" className="w-full h-[136px] rounded-lg object-cover" />
                                            <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                                <p className="font-medium text-base text-[10px]">{v.name}</p>
                                                <p className=" font-normal text-[10px]">{v.desc}</p>
                                                <p className=" font-medium text-xs pt-0.5">{v.price}</p>
                                                <div className="w-full flex items-center gap-2">
                                                    <Rating />
                                                    <p className=" font-normal text-[10px]">{v.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            rightAlign && rightAlign.map((v, i) => {
                                return (
                                    <Link to={`/shop/${v.id}`}>
                                        <div className="w-full h-[305px] rounded-lg mb-3 shadow-md">
                                            <img src={v.image} alt="" className="w-full h-[196px] rounded-lg object-cover" />
                                            <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                                <p className="font-medium text-base text-[10px]">{v.name}</p>
                                                <p className=" font-normal text-[10px]">{v.desc}</p>
                                                <p className=" font-medium text-xs pt-0.5">{v.price}</p>
                                                <div className="w-full flex items-center gap-2">
                                                    <Rating />
                                                    <p className=" font-normal text-[10px]">{v.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TrendingProducts