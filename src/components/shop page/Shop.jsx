import React, { useEffect, useState } from "react";
import { Container } from "../trending products";
import Cart from "./icons/Cart";
import { Rating } from "../home page/icons";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../api/axios";
import useCartStore, { useRelated } from "../../provider/zustand";
import { motion } from "framer-motion";
import "../../index.css";
import SvgComponent from "./icons/Plus";
import Minus from "./icons/Minus";
import Skeleton from "react-loading-skeleton";
import backicon from "../../assets/back.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Shop = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const { items } = useRelated();
  const [loading, setLoading] = useState(true);
  const [isScaled, setIsScaled] = useState(false);

  const fetchData = async () => {
    try {
      const savedItem = localStorage.getItem(`item_${id}`);
      if (savedItem) {
        setData(JSON.parse(savedItem));
      } else {
        const response = await client.get(`/product?id=${id}`);
        setData(response.data.data);
      }
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
    const previousItemId = localStorage.getItem('previousItemId');
    if (previousItemId && previousItemId !== id) {
      localStorage.removeItem(`item_${previousItemId}`);
    }
    localStorage.setItem('previousItemId', id);
  }, [id]);

  const handleItem = () => {
    addToCart({ ...data, quantity });
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 200);
  };

  const routeVariants = {
    initial: {
      y: "1vh",
    },
    final: {
      y: "0vh",
    },
  };

  const transition = {
    duration: 1,
    ease: [0.43, 0.3, 0.23, 0.96],
  };

  const handleRemoveQuantity = () => {
    if (quantity != 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleItemClick = (newItemId) => {
    setLoading(true);
    navigate(`/shop/${newItemId}`);
    navigate(0);
  }

  return (
    <div className="w-full flex flex-col">
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        transition={transition}
      >
        <Container>
          <div className="w-full h-20 flex justify-between items-center p-4">
            <div onClick={() => navigate(-1)} className="hover:cursor-pointer">
              <img src={backicon} className="h-5 w-[9.5px]" />
            </div>
            <div
              className={`bg-[#F2F2F2] rounded-full p-2 ${isScaled ? 'scale-125' : 'scale-100'} transform transition-transform duration-200 ease-in-out cursor-pointer w-10 h-10 flex justify-center items-center`}
              onClick={() => navigate("/cart")}
            >
              <Cart />
              {
                cart.length != 0 ? <div className="absolute -top-0.5 right-0.5 w-3 h-3 rounded-full bg-[#f6153a] flex justify-center items-center text-white text-[10px]">{cart.length}</div> : ""
              }
            </div>
          </div>
        </Container>

        <Container>
          <div className="px-4 pt-1">
            {loading ? (
              <Skeleton height={200} borderRadius={10} />
            ) : (
              <LazyLoadImage
                className="w-full h-[213px] rounded-2xl object-cover"
                src={data.img[0].src}
                effect="blur"
                width="100%"
              />
            )}

            <div className="w-full h-8 flex justify-center items-center gap-1">
              {loading ? <Skeleton height={10} width={10} className=" rounded-full" /> :
                data.img.map((v, i) => (
                  <i
                    className="rounded-full bg-[#F83758] p-[5px]"
                    key={i}
                  />
                ))}
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col gap-3">
            <div className="px-4">
              {loading ? (
                <div className="mt[-30px]">
                  <Skeleton height={20} width={150} />
                </div>
              ) : (
                <p className="font-bold text-base my-1.5">
                  {Object.keys(data.options[0])} : {data.options[0].color}
                </p>
              )}

              {loading ? (
                <div className="flex-col gap-3">
                  <Skeleton height={15} />
                  <Skeleton height={15} width={150} />
                  <div className="w-full grid grid-flow-col justify-between mt-3">
                    <Skeleton height={50} width={120} />
                    <Skeleton height={50} width={175} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-xl">{data.name}</p>
                  <p className="font-normal text-sm">{data.description}</p>

                  <div className="w-full flex gap-1.5 items-center">
                    <Rating />
                    <p className="text-[#828282] font-medium text-sm">
                      {data.rating}
                    </p>
                  </div>

                  <div className="w-full flex gap-2 text-sm">
                    <p className="line-through text-[#808488] font-normal">
                      ₹{data.price}
                    </p>
                    <p className="font-medium">₹{data.final_price}</p>
                    {data.discount && (
                      <p className="text-[#FA7189] font-semibold">
                        {data.discount.value} Off
                      </p>
                    )}
                  </div>

                  <p className="text-sm font-medium mb-0.5">Product Details</p>

                  <p className=" text-xs font-normal">{data.description}</p>

                  <div className="w-full flex items-end">
                    <div className="w-full">
                      <p className=" font-semibold text-sm mt-1.5">
                        Select Quantity
                      </p>
                      <div className="w-[70%] flex justify-around items-center bg-[#EAEAEA] rounded-[5px] h-10 mt-2">
                        <div
                          className="h-10 w-auto flex items-center"
                          onClick={() => handleRemoveQuantity()}
                        >
                          <Minus />
                        </div>
                        <p className=" text-sm px-2 py-1 bg-white rounded-md font-medium">
                          {quantity}
                        </p>
                        <div
                          className="h-10 w-auto flex items-center"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <SvgComponent />
                        </div>
                      </div>
                    </div>

                    <button
                      className=" bg-[#F83758] font-semibold text-white text-lg py-[14px] px-[32px] rounded-lg h-13 w-full active:bg-[#f51e42] hover:cursor-pointer"
                      onClick={handleItem}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

              )}
            </div>

            {loading ? (
              <>
                <Skeleton height={50} width={352} className="mt-8 ml-4 mb-2" />
                <div className="w-full flex gap-3 overflow-y-scroll no-scrollbar px-4">
                  <Skeleton height={200} width={160} />
                  <Skeleton height={200} width={160} />
                  <Skeleton height={200} width={160} />
                </div>
              </>
            ) : (
              <div className="">
                <p className=" text-xl font-semibold mt-8 mb-4 pl-4">Similar To</p>
                <div className="w-full flex gap-4 overflow-y-scroll no-scrollbar px-4">
                  {items.map((v, i) => (
                    <div className="hover:cursor-pointer" onClick={() => handleItemClick(v.id)}>
                      <div className=" w-40 min-h-[245px] h-auto pb-0.5 rounded-lg mb-3 shadow-md container ">
                        <LazyLoadImage
                          src={v.img[0].src}
                          className="w-full h-[140px] rounded-lg object-cover"
                          effect="blur"
                          width="100%"
                        />
                        <div className="w-full flex flex-col gap-0.5 mx-2 my-2">
                          <p className="font-medium text-base text-[10px]">
                            {v.name}
                          </p>
                          <p className=" font-normal text-[10px] h-10">
                            {v.description}
                          </p>
                          <p className=" font-medium text-xs pt-0.5">
                            ₹{v.price}
                          </p>
                          <div className="w-full flex items-center gap-2">
                            <Rating />
                            <p className=" font-normal text-[10px] pt-0.5">
                              {v.rating || ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Shop;
