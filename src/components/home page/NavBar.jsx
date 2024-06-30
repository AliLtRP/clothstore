
import Logo from "../../assets/Logo.png";
import Avatar from "../../assets/Avatar.png";
import { HumMenu } from "./icons";


const NavBar = () => {
    return (
        <div className="w-[352px] z-20 top-0 h-16 bg-white fixed flex justify-between items-center">
            <HumMenu />
            <img src={Logo} alt="logo" className="w-[113px] h-[32px]" />
            <img src={Avatar} alt="user avatar" className="w-10 h-10" />
        </div>
    )
}

export default NavBar