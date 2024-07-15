import React, { useEffect, useState } from 'react'
import { RightArrowSVG } from './icons'
import Skeleton from 'react-loading-skeleton'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'
import { useRelated } from '../../provider/zustand'

const List = ({ v }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { setItems } = useRelated();
    const navigateToTrendingProduct = (bannerID) => {
        navigate('/trending/product', { state: { id: bannerID } });
    };

    useEffect(() => {
        if (v) {
            setItems(v.products_ids);
            setLoading(false);
        }
    }, [v]);

    console.log(v, 'v');

    return (
        <div className="h-auto flex flex-col gap-3 px-0">
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
                    <div className="w-full h-72 flex gap-3 flex-nowrap overflow-x-scroll no-scrollbar">
                        {
                            v.products_ids.map((v, i) => {
                                { console.log(v) }
                                return (
                                    <Link to={`/shop/${v.id}`} key={i}>
                                        {
                                            <ProductCard image={v.img[0].src} title={v.name} desc={v.description} price={`₹${v.final_price}`} off={`₹${v.final_price}`} percent={v.discount_value} />
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