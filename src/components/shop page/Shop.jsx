import React, { useEffect, useState } from 'react';
import { Container } from '../trending products';
import { BackArrow } from '../trending products/icons';
import Cart from "./icons/Cart";
import { Rating } from '../home page/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import client from '../../api/axios';
import useCartStore, { useRelated } from '../../provider/zustand';
import { motion } from "framer-motion";
import "../../index.css";
import SvgComponent from './icons/Plus';
import Minus from "./icons/Minus";


const Shop = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();
    const { cart, addToCart } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const { items } = useRelated();

    const fetchData = async () => {
        await client.get(`/product?id=${id}`)
            .then(res => setData(res.data.data))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleItem = () => {
        const existsInCart = cart.some(item => item.id === data.id);
        if (!existsInCart) {
            // data['quantity'] = quantity;
            addToCart({ ...data, quantity });
        }
    }

    const routeVariants = {
        initial: {
            y: '1vh'
        },
        final: {
            y: '0vh'
        }
    };

    const transition = {
        duration: 1,
        ease: [0.43, 0.3, 0.23, 0.96]
    };

    const handleRemoveQuantity = () => {
        if (quantity != 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='w-full flex flex-col'>
            <motion.div variants={routeVariants} initial="initial" animate="final" transition={transition}>
                <Container>
                    <div className='w-full h-20 flex justify-between items-center p-4'>
                        <div onClick={() => navigate(-1)}>
                            <BackArrow className="h-5 w-[9.5px]" />
                        </div>
                        <div className='bg-[#F2F2F2] rounded-full p-2' onClick={() => navigate('/cart')}>
                            <Cart />
                        </div>
                    </div>
                </Container >

                <Container>
                    <div className='px-4 pt-1'>
                        {
                            data.img &&
                            <img src={data.img[0].src} alt="product image" className=' w-full h-[213px] rounded-2xl object-cover' />
                        }

                        <div className='w-full h-8 flex justify-center items-center gap-1'>
                            {
                                data.img && data.img.map((v, i) => {
                                    return (
                                        <>
                                            <i className='rounded-full bg-[#F83758] p-[5px]' />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className='p-4 flex flex-col gap-3'>
                        {
                            data.options &&
                            <p className=' font-bold text-base'>{Object.keys(data.options[0])} : {data.options[0].color}</p>
                        }

                        <div className='flex flex-col gap-3'>
                            <p className=' font-bold text-xl'>{data.name}</p>
                            <p className=' font-normal text-sm'>{data.description}</p>

                            <div className='w-full flex gap-1.5 items-center'>
                                <Rating />
                                <p className=' text-[#828282] font-medium text-sm'>{data.rating}</p>
                            </div>

                            <div className='w-full flex gap-2 text-sm'>
                                <p className=' line-through text-[#808488] font-normal'>₹{data.price}</p>
                                <p className=' font-medium'>₹{data.final_price}</p>
                                {
                                    data.discount &&
                                    <p className=' text-[#FA7189] font-semibold'>{data.discount.value} Off</p>
                                }
                            </div>

                            <p className=' text-sm font-medium mb-0.5'>Product Details</p>

                            <p className=' text-xs font-normal'>
                                {data.description}
                            </p>

                            <div className='w-full flex items-end'>
                                <div className='w-full'>
                                    <p className=' font-semibold text-sm mt-1.5'>Select Quantity</p>
                                    <div className='w-[70%] flex justify-around items-center bg-[#EAEAEA] rounded-[5px] h-10 mt-2'>
                                        <div className='h-10 w-auto flex items-center' onClick={() => handleRemoveQuantity()}>
                                            <Minus />
                                        </div>
                                        <p className=' text-sm px-2 py-1 bg-white rounded-md font-medium'>{quantity}</p>
                                        <div className='h-10 w-auto flex items-center' onClick={() => setQuantity(quantity + 1)}>
                                            <SvgComponent />
                                        </div>
                                    </div>
                                </div>
                                <button className=' bg-[#F83758] font-semibold text-white text-lg py-[14px] px-[32px] rounded-lg h-13 w-full' onClick={handleItem}>Add to Cart</button>
                            </div>
                        </div>

                        <p className=' text-xl font-semibold mt-8'>Similar To</p>

                        <div className='w-full flex gap-4 overflow-y-scroll no-scrollbar'>
                            {
                                items && items.map((v, i) => {
                                    return (
                                        <Link to={`/shop/${v.id}`}>
                                            <div className=" w-40 min-h-[245px] h-auto pb-0.5 rounded-lg mb-3 shadow-md container ">
                                                <img src={v.img[0].src} alt="" className="w-full h-[140px] rounded-lg object-cover" />
                                                <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                                    <p className="font-medium text-base text-[10px]">{v.name}</p>
                                                    <p className=" font-normal text-[10px]">{v.description}</p>
                                                    <p className=" font-medium text-xs pt-0.5">₹{v.price}</p>
                                                    <div className="w-full flex items-center gap-2">
                                                        <Rating />
                                                        <p className=" font-normal text-[10px] pt-0.5">{v.rating || 0}</p>
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
            </motion.div>
        </div >
    )
}

export default Shop