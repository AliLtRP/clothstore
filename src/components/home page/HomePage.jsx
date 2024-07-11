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
        await client.get(`/banner/all`)
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const sortedByPriority = data.sort((a, b) => a.priority < b.priority);
            setData(sortedByPriority);
        }
    }, [data]);

    console.log(data);

    return (
        <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD] mb-20">
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

                <div className="h-full flex flex-col gap-12 my-4">
                    {
                        data && data.map((v, i) => {
                            if (v.type == 'slider') {
                                return (
                                    <Card banners={v.banners} />
                                )
                            } else if (v.type == 'banner') {
                                return (
                                    <NewArrival title={v.title} description={v.description} />
                                );
                            } else if (v.type == 'deal') {
                                return (
                                    <Deal endTime={v.end_date} />
                                )
                            } else if (v.type == 'list') {
                                return (
                                    <div className="h-auto flex flex-col gap-3 px-0">
                                        <div className="w-full flex justify-between items-center">
                                            <p className=" font-semibold text-sm hover:cursor-pointer" onClick={() => navigateTo('/trending/product')}>{v.title}</p>
                                            <div onClick={() => navigateTo('/trending/product')} className=" hover:cursor-pointer">
                                                <RightArrowSVG />
                                            </div>
                                        </div>

                                        <div className="w-full flex justify-start gap-3">
                                            <ProductCard image={v.img} title="Women Printed Kurta" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹1500" off="₹2499" percent="40%" />
                                            <ProductCard image={v.img} title="HRX by Hrithik Roshan" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹2499" off="₹4999" percent="50%" />
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
            <div className="max-w-sm flex justify-center">
                <Footer path="home" />
            </div>
        </div>
    )
}

export default HomePage