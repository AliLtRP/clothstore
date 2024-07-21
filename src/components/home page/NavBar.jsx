import React from "react";
import Logo from "../../assets/Logo.png";
import Avatar from "../../assets/Avatar.png";
import { HumMenu } from "./icons";
import { Container } from "../trending products";
import Skeleton from "react-loading-skeleton";

const NavBar = ({ loading }) => {
  return (
    <Container>
      {loading ? (
        <div className="max-w-sm w-full z-20 top-0 h-16 bg-white fixed flex justify-between items-center">
          <Skeleton circle={true} height={40} width={40} />
          <Skeleton height={40} width={100} />
          <Skeleton circle={true} height={40} width={40} />
        </div>
      ) : (
        <div className="max-w-sm w-full px-4 z-20 top-0 h-16 bg-white fixed flex justify-between items-center">
          <HumMenu />
          <img src={Logo} alt="logo" className="w-[113px] h-[32px]" />
          <img src={Avatar} alt="user avatar" className="w-10 h-10" />
        </div>
      )}
    </Container>
  );
};

export default NavBar;
