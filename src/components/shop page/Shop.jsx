import React from 'react';
import { Container } from '../trending products';
import { BackArrow } from '../trending products/icons';
import prodImage from "./assets/image.png";
import Cart from "./icons/Cart";
import { Rating } from '../home page/icons';


const Shop = () => {
    return (
        <div className='w-full flex flex-col'>
            <Container>
                <div className='w-full h-20 flex justify-between items-center p-4'>
                    <BackArrow className="h-5 w-[9.5px]" />
                    <div className='bg-[#F2F2F2] rounded-full p-2'>
                        <Cart />
                    </div>
                </div>
            </Container>

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

                    <div className='mt-1.5 flex flex-col gap-1'>
                        <p className=' font-bold text-xl'>NIke Sneakers</p>
                        <p className=' font-normal text-sm'>Vision Alta Men’s Shoes Size (All Colours)</p>

                        <div className='w-full flex items-center'>
                            <Rating />
                            <p className=' text-[#828282] font-medium text-sm'>56,890</p>
                        </div>

                        <div>
                            <p>₹2,999</p>
                            <p>₹1,500</p>
                            <p>50% Off</p>
                        </div>

                        <p>Product Details</p>

                        <p>
                            Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More
                        </p>

                        <div>
                            <div>
                                <p>Select Quantity</p>
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>

                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Shop