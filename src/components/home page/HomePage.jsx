import Footer from "./Footer";
import { MicSVG, SearchSVG } from "./icons";
import { NavBar, Categories, Card, Deal } from "./index";
import NewArrival from "./NewArrival";
import { useEffect, useState } from "react";
import client from "../../api/axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import List from "./List";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await client.get(`/banner/all`);
      setData(res.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[24rem] max-w-sm p-4 flex flex-col gap-6">
        <NavBar loading={loading} />
        <div className="w-full flex justify-center relative mt-12">
          {loading ? (
            <Skeleton width={350} height={35} className="rounded-md" />
          ) : (
            <>
              <SearchSVG className="absolute top-2/4 left-6 translate-x-[-50%] translate-y-[-50%]" />
              <input
                type="text"
                placeholder="Search any Product.."
                className="bg-white w-full p-2 pl-10 rounded-md box-shadow text-sm text-[#BBBBBB]"
              />
              <MicSVG className="absolute top-2/4 right-2.5 translate-x-[-50%] translate-y-[-50%]" />
            </>
          )}
        </div>
        <div className="w-full h-auto gap-2">
          <Categories loading={loading} />
        </div>

        <div className="h-full flex flex-col gap-12 mt-2">
          {loading ? (
            <>
              <div className="flex items-center gap-1.5 mt-[-3px] ">
                <Skeleton height={20} width={100} />
              </div>
              <div className="flex gap-4 mt-[-30px] ">
                <div className="flex flex-col gap-1.5">
                <Skeleton height={170} width={165} borderRadius={10}/>
                  <Skeleton width={165} height={20} />
                  <Skeleton width={140} height={15} />
                </div>
                <div className="flex flex-col gap-1.5">
                <Skeleton height={170} width={165} borderRadius={10}/>
                  <Skeleton width={165} height={20} />
                  <Skeleton width={140} height={15} />
                </div>

              </div>
              <div className="mt-[-30px]">
              <Skeleton height={200} width={350}  borderRadius={10}  />
              </div>

            </>
          ) : (
            data.map((v, i) => {
              if (v.type === "slider") {
                return <Card key={i} banners={v.banners} />;
              } else if (v.type === "banner") {
                return (
                  <NewArrival
                    key={i}
                    title={v.title}
                    description={v.description}
                  />
                );
              } else if (v.type === "deal") {
                return (
                  <Deal
                    key={i}
                    products={v.products_ids}
                    endTime={v.end_date}
                  />
                );
              } else if (v.type === "list") {
                return <List key={i} v={v} />;
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>
      <div className="max-w-sm flex justify-center">
        {loading ? (
          <Skeleton height={60} width={350} />
        ) : (
          <Footer path="home" />
        )}
      </div>
    </div>
  );
};

export default HomePage;
