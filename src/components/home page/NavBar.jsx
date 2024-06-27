import HumMenu from "./HumMenu"
import Logo from "../../assets/Logo.png";
import Avatar from "../../assets/Avatar.png";


const NavBar = () => {
    return (
        <div className="w-full flex justify-between p-4 items-center">
            <HumMenu />
            <img src={Logo} alt="logo" className="w-[113px] h-[32px]" />
            <img src={Avatar} alt="user avatar" className="w-10 h-10" />
        </div>
    )
}

export default NavBar