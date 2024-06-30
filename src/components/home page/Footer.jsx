import style from "./homepage.module.css"
import { CartIcon, HomeSVG, SearchIcon } from "./icons"
import Settings from "./icons/Settings"
import Wishlist from "./icons/Wishlist"
import { useNavigate } from "react-router-dom"

const Footer = ({ path }) => {
    const navigate = useNavigate();


    return (
        <div className="w-full sm:max-w-sm mx-auto h-14 px-4 flex justify-between items-center fixed bottom-0 bg-white border-t-[1px]">
            <div className=" flex flex-col items-center justify-center" onClick={() => navigate('/home')}>
                <HomeSVG color={path === "home" ? `#EB3030` : "#000"} />
                <p className={`text-xs text-center ${path === "home" ? "text-[#EB3030]" : "text-black"} ${style.roboto_regular}`}>Home</p>
            </div>
            <div className=" flex flex-col items-center justify-center" onClick={() => navigate('/wishlist')}>
                <Wishlist color={path === "wishlist" ? `#EB3030` : "#000"} />
                <p className={`text-xs text-center ${style.roboto_regular} ${path === "wishlist" ? "text-[#EB3030]" : "text-black"}`}>Wishlist</p>
            </div>
            <div className="relative">
                <div className={`absolute top-[-45px] left-[-25.5px] ${path === "cart" ? "bg-[#EB3030]" : "bg-white"} rounded-full p-4 drop-shadow-md`} onClick={() => navigate('/cart')}>
                    <CartIcon color={path === "cart" ? "#fff" : "#000"} />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center" onClick={() => navigate('/search')}>
                <SearchIcon color={path === "search" ? `#EB3030` : "#000"} />
                <p className={`text-xs text-center ${style.roboto_regular} ${path === "search" ? "text-[#EB3030]" : "text-black"}`}>Search</p>
            </div>

            <div className=" flex flex-col items-center justify-center" onClick={() => navigate('/settings')}>
                <Settings color={path === "settings" ? `#EB3030` : "#000"} />
                <p className={`text-xs text-center ${style.roboto_regular} ${path === "settings" ? "text-[#EB3030]" : "text-black"}`}>Settings</p>
            </div>
        </div>

    )
}

export default Footer