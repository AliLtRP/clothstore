import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackArrow } from "./trending products/icons";
import { Rating } from "./home page/icons";
import client from "../api/axios";
import { Container } from "./trending products";
import { motion } from "framer-motion"
import { useRelated } from "../provider/zustand";
import LoadingSkeleton from "./LoadingSkeleton";
import backicon from '../assets/back.svg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import Header from "./headerComp";



const CategoryProducts = () => {
    const navigator = useNavigate();
    const [data, setData] = useState([]);
    const { id, name } = useParams();
    const { setItems } = useRelated();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await client.get(`/category/products?id=${id}`);
            setData(res.data.data);
            setItems(res.data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const preprocessData = (data) => {
        const leftAlign = [];
        const rightAlign = [];
        data.forEach((item, index) => {
            if (index % 5 === 0 || index % 5 === 3 || index % 5 === 4) {
                leftAlign.push(item);
            } else {
                rightAlign.push(item);
            }
        });
        return { leftAlign, rightAlign };
    };

    const { leftAlign, rightAlign } = preprocessData(data);

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

    return (
        <div className="w-full flex flex-col mx-auto">
            <motion.div variants={routeVariants} initial="initial" animate="final" transition={transition}>
                <Container>
                    <Header title={name}/>
                </Container>

                <Container>
                    <div className="w-full grid grid-cols-2 justify-between items-start gap-3 px-4 py-6">
                        <div>
                            {loading ? <LoadingSkeleton />
                                :
                                leftAlign.map((v, i) => (
                                    <Link to={`/shop/${v.id}`} key={v.id}>
                                        <div className="w-full min-h-[245px] h-auto rounded-lg mb-3 shadow-md">
                                            <LazyLoadImage
                                                className="w-full h-[136px] rounded-lg object-cover"
                                                effect="blur"
                                                src={v.img[0].src}
                                                alt="category images"
                                                width="100%"
                                            />
                                            <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                                <p className="font-medium w-[90%] text-base text-[10px] text-wrap overflow-hidden">{v.name}</p>
                                                <p className="font-normal text-[10px] w-[90%]">{v.description}</p>
                                                <p className="font-medium text-xs pt-0.5">₹ {v.price}</p>
                                                <div className="w-full flex items-center gap-2 mb-1.5">
                                                    <Rating />
                                                    <p className="font-normal text-[10px]">{Math.floor(v.average_rating) || ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                        <div>
                            {loading ?
                                <LoadingSkeleton height={250} />
                                :
                                rightAlign.map((v, i) => (
                                    <Link to={`/shop/${v.id}`} key={v.id}>
                                        <div className="w-full min-h-[305px] h-auto rounded-lg mb-3 shadow-md">
                                            <LazyLoadImage
                                                className="w-full h-[196px] rounded-lg object-cover"
                                                effect="blur"
                                                src={v.img[0].src}
                                                alt="category images"
                                                width="100%"
                                            />
                                            <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                                                <p className="font-medium w-[90%] text-base text-[10px] text-wrap overflow-hidden">{v.name}</p>
                                                <p className="font-normal text-[10px] w-[90%]">{v.description}</p>
                                                <p className="font-medium text-xs pt-0.5">₹ {v.price}</p>
                                                <div className="w-full flex items-center gap-2 mb-1.5">
                                                    <Rating />
                                                    <p className="font-normal text-[10px]">{Math.floor(v.average_rating) || ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Container>
            </motion.div>
        </div>
    );
};

export default CategoryProducts;
