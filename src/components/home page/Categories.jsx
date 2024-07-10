import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../api/axios';


const Categories = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await client.get('/category/all')
            .then(res => {
                const data = res.data.data
                const sortData = data.sort((a, b) => a.priority < b.priority);
                setData(sortData);
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='w-full flex justify-between'>
            {
                data && data.map((v, i) => {
                    return (
                        <div className='flex flex-col w-14' key={i}>
                            <Link to={`/category/product/${v.id}/${v.name}`} >
                                <div className='w-14 h-14 rounded-full bg-black'>
                                    <img src={v.img} alt="category images" className='rounded-full h-14 w-14 object-fill' />
                                </div>
                            </Link>
                            <p className='text-center pt-2 text-[#21003D] text-[10px] leading-[16px]'>{v.name}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Categories