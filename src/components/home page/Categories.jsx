import React from 'react'
import fashion from "../../assets/fashion.png";
import beauty from "../../assets/beauty.png";
import kids from "../../assets/kids.png";
import men from "../../assets/men.png";
import women from "../../assets/women.png";


const Categories = (props) => {
    const categoriesNames = ["Beauty", "Fashion", "Kids", "Mens", "Womens"]
    const images = [beauty, fashion, kids, men, women]
    return (
        <div className='w-full flex justify-between'>
            {
                categoriesNames && categoriesNames.map((v, i) => {
                    return (
                        <div className='flex flex-col w-14' key={i}>
                            <div className='w-14 h-14 rounded-full bg-black'>
                                <img src={images[i]} alt="category images" />
                            </div>
                            <p className='text-center pt-2 text-[#21003D] text-[10px] leading-[16px]'>{v}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories