import React, { useState, useContext } from "react";
import Image from "next/image";

//Internal Import
import Style from "./Token.module.css";
import images from "../../assets";
import { Toggle } from "../index";

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
      <div className={Style.Token_box}>
        <div className={Style.Token_box_heading}>
          <h4> Settings</h4>
          <Image
            src={images.close}
            alt="close"
            width={50}
            height={50}
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <p className={Style.Token_box_para}>
          Slippage tolerance{" "}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>
        <div className={Style.Token_box_input}>
          <button> Auto</button>
          <input type="text" placeholder="0.10%" />
        </div>
        <p className={Style.Token_box_para}>
          Slippage tolerance{" "}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>
        <div className={Style.Token_box_input}>
          <input type="text" placeholder="30" />
          <button> minutes</button>
        </div>
        <h2>Interface Setting</h2>
        <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>Transaction deadline</p>
          <Toggle label="No" />
        </div>
      </div>
    </div>
  );
};

export default Token;