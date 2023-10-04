import React, { useState, useEffect } from "react";
import Image from "next/image"; 

// INTERNAL IMPORT
import Style from "../styles/Pools.module.css";
import images from "../assets";
import { PoolAdd, PoolConnect, PoolAdd } from "../components/index";

const Pool=() => {
    return(
        <div className={Style.Pool}>
        <PoolAdd/>
        <PoolConnect/>
        </div>
    );
};
export default Pool;