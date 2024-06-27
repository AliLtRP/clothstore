
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { RightArrowSVG } from "./icons"
import { NavBar, SearchSvg, MicSvg, Categories, Card, Deal } from "./index"
import product_image from "../../assets/product_image.png";
import shoeproduct from "../../assets/shoeproduct.png"


const HomePage = () => {
    return (
        <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
            <div className="min-w-[384px] max-w-[383px] p-4 flex flex-col gap-6">
                <NavBar />

                <div className="w-full flex justify-center relative">
                    <SearchSvg className=" absolute top-2/4 left-6 translate-x-[-50%] translate-y-[-50%]" />
                    <input type="text" placeholder="Search any Product.." className="bg-white w-full p-2 pl-10 rounded-md shadow-sm text-sm text-[#BBBBBB]" />
                    <MicSvg className=" absolute top-2/4 right-1 translate-x-[-50%] translate-y-[-50%]" />
                </div>

                <div className="w-full h-auto flex gap-2">
                    <Categories />
                </div>

                <Card />

                <Deal />

                <div className=" min-w-[383px] max-w-[383px]">
                    <Footer />
                </div>

                <div className="flex flex-col gap-3 px-2">
                    <div className="w-full flex justify-between">
                        <p className=" font-semibold text-sm">Top Rate</p>
                        <RightArrowSVG />
                    </div>

                    <div className="w-full flex gap-3">
                        <ProductCard image={product_image} title="Women Printed Kurta" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹1500" off="₹2499" percent="40%" />
                        <ProductCard image={shoeproduct} title="HRX by Hrithik Roshan" desc="Neque porro quisquam est qui dolorem ipsum quia" price="₹2499" off="₹4999" percent="50%" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage