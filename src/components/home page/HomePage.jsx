import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { MicSVG, RightArrowSVG, SearchSVG } from "./icons"
import { NavBar, Categories, Card, Deal } from "./index"
import product_image from "../../assets/product_image.png";
import shoeproduct from "../../assets/shoeproduct.png"
import NewArrival from "./NewArrival";
import watch_product from "../../assets/watch_product.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../../api/axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const navigateToTrendingProduct = (bannerID) => {
        navigate('/trending/product', { state: { id: bannerID } });
    };

    const fetchData = async () => {
        await client.get(`/banner/all`)
            .then(res => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch(e => console.log(e));
    }


    useEffect(() => {
        fetchData();
    }, []);

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
                                return (loading ? (
                                    <Skeleton height={80} />
                                ) :
                                    <Deal endTime={v.end_date} />
                                )
                            } else if (v.type == 'list') {
                                return (
                                    <div className="h-auto flex flex-col gap-3 px-0">
                                        <div className="w-full flex justify-between items-center">
                                            <p className=" font-semibold text-sm hover:cursor-pointer" onClick={() => navigateToTrendingProduct(v.id)}>{v.title}</p>
                                            <div onClick={() => navigateToTrendingProduct(v.id)} className=" hover:cursor-pointer">
                                                <RightArrowSVG />
                                            </div>
                                        </div>

                                        {loading ? (
                                            <Skeleton count={1} height={150} width="100%" />
                                        ) : (
                                            <div className="w-full h-72 flex gap-3 flex-nowrap overflow-x-hidden">
                                                {
                                                    v.products_ids.map((v, i) => {
                                                        return (
                                                            <Link to={`/shop/${v.id}`}>
                                                                {
                                                                    v.img &&
                                                                    <ProductCard image={v.img[0].src} title="Women Printed Kurta" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹1500" off="₹2499" percent="40%" />
                                                                }
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )}
                                    </div>)
                            }
                        })}
                </div>


            </div>
            <div className="max-w-sm flex justify-center">
                <Footer path="home" />
            </div>
        </div>
    )
}

export default HomePage

