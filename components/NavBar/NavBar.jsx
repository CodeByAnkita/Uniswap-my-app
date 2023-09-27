import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//IMPORT INTERNAL
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(false);

  // // Wallet connection function (replace with your actual logic)
  // const connectWallet = () => {
  //   // Your wallet connection logic here
  //   console.log("Wallet connected!");
  // };

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <div className={Style.NavBar_box_left_img}>
            {/* {Logo Images} */}
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          {/* {menuItems} */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* //Middle Section */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="serch" width={20} height={20} />
            </div>
            {/* //Input Section */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* //Right Section */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          {account ? (
            <button onClick={() => setOpenModel(true)}>Connect</button>
          ) : (
            <button onClick={() => setOpenTokenBox(true)}>
              0xhdadsyutugkgh11
            </button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>
      {/* //Tokenlist Components */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default NavBar;