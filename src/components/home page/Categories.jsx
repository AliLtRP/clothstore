import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../api/axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Categories = ({ loading }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await client.get('/category/all')
            .then(res => {
                const data = res.data.data;
                const sortData = data.sort((a, b) => a.priority < b.priority);
                setData(sortData);
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    return (
        <div className='w-full h-[90px] px-4 flex overflow-x-scroll overflow-y-hidden no-scrollbar items-end justify-start gap-10 -mb-7'>
            {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                    <div className='flex flex-col w-14' key={i}>
                        <Skeleton circle={true} height={56} width={56} />
                        <Skeleton width={56} height={16} className='mt-2' />
                    </div>
                ))
            ) : (
                data.map((v, i) => (
                    <div className='flex flex-col w-14' key={i}>
                        <Link to={`/category/product/${v.id}/${v.name}`} >
                            <div className='w-14 h-14 rounded-full bg-black'>
                                <LazyLoadImage
                                    src={v.img}
                                    className='rounded-full h-14 w-14 object-fill'
                                    effect='opacity'
                                />
                            </div>
                        </Link>
                        <p className='text-center pt-2 text-[#21003D] text-[10px] leading-[16px]'>{v.name}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Categories;
