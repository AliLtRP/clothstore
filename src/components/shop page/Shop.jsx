import React from 'react';
import { Container } from '../trending products';
import { BackArrow } from '../trending products/icons';
import prodImage from "./assets/image.png";
import Cart from "./icons/Cart";
import { Rating } from '../home page/icons';
import { Link, useNavigate } from 'react-router-dom';
import related from "./assets/related.png";
import related2 from "./assets/related2.png";


const Shop = () => {

    const navigate = useNavigate()


    return (
        <div className='w-full flex flex-col'>
            <Container>
                <div className='w-full h-20 flex justify-between items-center p-4'>
                    <div onClick={() => navigate(-1)}>
                        <BackArrow className="h-5 w-[9.5px]" />
                    </div>
                    <div className='bg-[#F2F2F2] rounded-full p-2'>
                        <Cart />
                    </div>
                </div>
            </Container >

            <Container>
                <div className='px-4 pt-1'>
                    <img src={prodImage} alt="" className=' w-full h-[213px] rounded-2xl object-cover' />

                    <div className='w-full h-8 flex justify-center items-center gap-1'>
                        <i className='rounded-full bg-[#F83758] p-[5px]' />
                        <i className='rounded-full bg-[#F2F2F2] p-1' />
                        <i className='rounded-full bg-[#F2F2F2] p-1' />
                        <i className='rounded-full bg-[#F2F2F2] p-1' />
                        <i className='rounded-full bg-[#F2F2F2] p-1' />
                    </div>
                </div>
            </Container>

            <Container>
                <div className='p-4 flex flex-col gap-3'>
                    <p className=' font-bold text-base'>Size: 7UK</p>

                    <div className='w-full h-auto flex gap-3'>
                        <div className='w-[50px] h-[32px] border-[1.5px] border-[#FA7189] text-[#FA7189] flex justify-center items-center bg-white rounded text-sm font-semibold'> 6 UK</div>
                        <div className='w-[50px] h-[32px] border-[1.5px] border-[#FA7189] text-[#FFF] flex justify-center items-center bg-[#FA7189] rounded text-sm font-semibold'> 7 UK</div>
                        <div className='w-[50px] h-[32px] border-[1.5px] border-[#FA7189] text-[#FA7189] flex justify-center items-center bg-white rounded text-sm font-semibold'> 8 UK</div>
                        <div className='w-[50px] h-[32px] border-[1.5px] border-[#FA7189] text-[#FA7189] flex justify-center items-center bg-white rounded text-sm font-semibold'> 9 UK</div>
                        <div className='w-[50px] h-[32px] border-[1.5px] border-[#FA7189] text-[#FA7189] flex justify-center items-center bg-white rounded text-sm font-semibold'> 10 UK</div>
                    </div>

                    <div className='mt-1.5 flex flex-col gap-2'>
                        <p className=' font-bold text-xl'>NIke Sneakers</p>
                        <p className=' font-normal text-sm'>Vision Alta Men’s Shoes Size (All Colours)</p>

                        <div className='w-full flex gap-1.5 items-center'>
                            <Rating />
                            <p className=' text-[#828282] font-medium text-sm'>56,890</p>
                        </div>

                        <div className='w-full flex gap-2 text-sm'>
                            <p className=' line-through text-[#808488] font-normal'>₹2,999</p>
                            <p className=' font-medium'>₹1,500</p>
                            <p className=' text-[#FA7189] font-semibold'>50% Off</p>
                        </div>

                        <p className=' text-sm font-medium'>Product Details</p>

                        <p className=' text-xs font-normal'>
                            Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More
                        </p>

                        <div className='w-full flex items-end'>
                            <div className='w-full'>
                                <p className=' font-medium text-sm mt-1.5'>Select Quantity</p>
                                <div className='w-[70%] flex justify-around items-center bg-[#EAEAEA] rounded-[5px] h-10 mt-2'>
                                    <button className='text-2xl'>-</button>
                                    <p className=' text-sm px-2 py-1 bg-white rounded-md font-medium'>01</p>
                                    <button className='text-2xl'>+</button>
                                </div>
                            </div>
                            <button className=' bg-[#F83758] font-semibold text-white text-lg py-[14px] px-[32px] rounded-lg h-13 w-full' onClick={() => navigate('/placeorder')}>Checkout</button>
                        </div>
                    </div>

                    <p className=' text-xl font-semibold mt-8'>Similar To</p>

                    <div className='w-full flex gap-4'>
                        <Link to={`/`}>
                            <div className="w-full h-[245px] rounded-lg mb-3 shadow-md">
                                <img src={related} alt="" className="w-full h-[136px] rounded-lg object-cover" />
                                <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                    <p className="font-medium text-base text-[10px]">NIke Sneakers</p>
                                    <p className=" font-normal text-[10px]">Nike Air Jordan Retro 1 Low Mystic Black</p>
                                    <p className=" font-medium text-xs pt-0.5">₹1,900</p>
                                    <div className="w-full flex items-center gap-2">
                                        <Rating />
                                        <p className=" font-normal text-[10px] pt-0.5">46,890</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to={`/`}>
                            <div className="w-full h-[245px] rounded-lg mb-3 shadow-md">
                                <img src={related2} alt="" className="w-full h-[136px] rounded-lg object-cover" />
                                <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                    <p className="font-medium text-base text-[10px]">NIke Sneakers</p>
                                    <p className=" font-normal text-[10px]">Nike Air Jordan Retro 1 Low Mystic Black</p>
                                    <p className=" font-medium text-xs pt-0.5">₹1,900</p>
                                    <div className="w-full flex items-center gap-2">
                                        <Rating />
                                        <p className=" font-normal text-[10px] pt-0.5">46,890</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Shop