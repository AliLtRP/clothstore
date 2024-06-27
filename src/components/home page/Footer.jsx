import CartIcon from "./CartIcon"
import HomeSVG from "./HomeSVG"
import SearchIcon from "./SearchIcon"
import Settings from "./Settings"
import Wishlist from "./Wishlist"
import style from "./homepage.module.css"

const Footer = () => {
    return (
        <div className="w-[352.7px] mx-auto h-14 px-4 flex justify-between items-center fixed bottom-0 bg-white shadow-md border-t-[1px]">
            <div className=" flex flex-col items-center justify-center">
                <HomeSVG color="#EB3030" />
                <p className={`text-xs text-center text-[#EB3030] ${style.roboto_regular}`}>Home</p>
            </div>
            <div className=" flex flex-col items-center justify-center">
                <Wishlist />
                <p className={`text-xs text-center ${style.roboto_regular}`}>Wishlist</p>
            </div>
            <div className=" relative">
                <div className=" absolute top-[-45px] left-[-25.5px] bg-white rounded-full p-4 drop-shadow-md">
                    <CartIcon />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center">
                <SearchIcon />
                <p className={`text-xs text-center ${style.roboto_regular}`}>Wishlist</p>
            </div>

            <div className=" flex flex-col items-center justify-center">
                <Settings />
                <p className={`text-xs text-center ${style.roboto_regular}`}>Wishlist</p>
            </div>
        </div>

    )
}

export default Footer