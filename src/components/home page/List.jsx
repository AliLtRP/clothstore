import React from 'react'
import { RightArrowSVG } from './icons'
import Skeleton from 'react-loading-skeleton'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'

const List = ({ v }) => {

    const navigate = useNavigate();

    const navigateToTrendingProduct = (bannerID) => {
        navigate('/trending/product', { state: { id: bannerID } });
    };

    console.log(v, 'v');

    return (
        <div className="h-auto flex flex-col gap-3 px-0">
            <div className="w-full flex justify-between items-center">
                {
                    v &&
                    <>
                        <p className=" font-semibold text-sm hover:cursor-pointer" onClick={() => navigateToTrendingProduct(v.id)}>{v.title}</p>
                        <div onClick={() => navigateToTrendingProduct(v.id)} className=" hover:cursor-pointer">
                            <RightArrowSVG />
                        </div>
                    </>
                }
            </div>

            {
                v &&
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
            }
        </div>
    )
}

export default List