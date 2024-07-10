import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { MicSVG, RightArrowSVG, SearchSVG } from "./icons"
import { NavBar, Categories, Card, Deal } from "./index"
import product_image from "../../assets/product_image.png";
import shoeproduct from "../../assets/shoeproduct.png"
import NewArrival from "./NewArrival";
import watch_product from "../../assets/watch_product.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../../api/axios";


const HomePage = () => {
    const [data, setData] = useState([]);
    const navigator = useNavigate();

    const navigateTo = (path) => {
        navigator(path)
    }

    const fetchData = async () => {
        await client.get('/product/discount')
            .then(res => setData(res.data.data))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
            <div className="min-w-[24rem] max-w-sm p-4 flex flex-col gap-6">
                <NavBar />

                <div className="w-full flex justify-center relative mt-16">
                    <SearchSVG className=" absolute top-2/4 left-6 translate-x-[-50%] translate-y-[-50%]" />
                    <input type="text" placeholder="Search any Product.." className="bg-white w-full p-2 pl-10 rounded-md shadow-sm text-sm text-[#BBBBBB]" />
                    <MicSVG className=" absolute top-2/4 right-1 translate-x-[-50%] translate-y-[-50%]" />
                </div>

                <div className="w-full h-auto flex gap-2">
                    <Categories />
                </div>

                <Card />

                <Deal />

                <div className="h-[330px] flex flex-col gap-3 px-2">
                    <div className="w-full flex justify-between items-center">
                        <p className=" font-semibold text-sm hover:cursor-pointer" onClick={() => navigateTo('/trending/product')}>Top Rate</p>
                        <div onClick={() => navigateTo('/trending/product')} className=" hover:cursor-pointer">
                            <RightArrowSVG />
                        </div>
                    </div>

                    <div className="w-full flex gap-3">
                        <ProductCard image={product_image} title="Women Printed Kurta" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹1500" off="₹2499" percent="40%" />
                        <ProductCard image={shoeproduct} title="HRX by Hrithik Roshan" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹2499" off="₹4999" percent="50%" />
                    </div>
                </div>

                <NewArrival />

                <div className="h-[330px] w-[110vw] sm:w-full flex flex-col gap-3 px-2 mt-6 mb-10">
                    <div className="w-full flex justify-between">
                        <p className=" font-semibold text-sm relative">Top Discounts</p>
                        <div className="h-full relative hover:cursor-pointer" onClick={() => navigateTo(`/discounted/product`)}>
                            <RightArrowSVG className=" absolute top-1 right-8 sm:relative sm:right-0" />
                        </div>
                    </div>

                    <div className="w-full h-full flex gap-3 overflow-x-auto no-scrollbar">
                        {
                            data && data.map((v, i) => {
                                return (
                                    <div className="min-w-[144px] h-[127px]">
                                        <img src={watch_product} alt="product" className="h-[165px] w-full object-cover rounded-[4px]" />
                                        <p className=" text-xs font-medium pt-2">{v.name}</p>
                                        <div className="py-2">
                                            <p className=" text-xs font-medium">₹{v.discounted_price}</p>
                                            <p className="text-[#FE735C] text-[10px]"> <span className="text-[#BBBBBB] text-xs font-normal line-through pr-1">₹{v.price}</span> {v.value} Off</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="max-w-sm flex justify-center">
                <Footer path="home" />
            </div>
        </div>
    )
}

export default HomePage