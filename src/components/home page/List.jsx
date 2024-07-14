import React, { useEffect, useState } from 'react'
import { RightArrowSVG } from './icons'
import Skeleton from 'react-loading-skeleton'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'

const List = ({ v }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const navigateToTrendingProduct = (bannerID) => {
        navigate('/trending/product', { state: { id: bannerID } });
    };

    useEffect(() => {
        if (v) {
            setLoading(false);
        }
    }, [v]);

    console.log(v, 'v');

    return (
        <div className="h-auto flex flex-col gap-3 px-0 fadeIn">
            <div className="w-full flex justify-between items-center">
                {
                    loading ? <Skeleton /> :
                        <>
                            <p className=" font-semibold text-sm hover:cursor-pointer" onClick={() => navigateToTrendingProduct(v.id)}>{v.title}</p>
                            <div onClick={() => navigateToTrendingProduct(v.id)} className=" hover:cursor-pointer">
                                <RightArrowSVG />
                            </div>
                        </>
                }
            </div>

            {
                loading ? <Skeleton height={200} /> :
                    <div className="w-full h-72 flex gap-3 flex-nowrap overflow-x-hidden">
                        {
                            v.products_ids.map((v, i) => {
                                return (
                                    <Link to={`/shop/${v.id}`}>
                                        {
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