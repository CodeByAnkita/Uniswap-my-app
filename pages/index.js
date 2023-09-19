import React, { useState, useContext, useEffect } from "react";

//Internal Import
import { HeroSection } from "../components/index";

const Home = () => {
  return (
    <div>
      <HeroSection accounts="hey" tokenData="DATA" />
    </div>
  );
};

export default Home;
