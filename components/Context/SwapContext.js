import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Model from "web3modal";

//INTERNAL IMPORT
import {
  checkIfWalletIsConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithIWITHToken,
  connectingWithDAIToken,
  // BooTokenAddress,
  // BooTokenABI,
  // LifeTokenAddress,
  // LifeTokenABI,
  // SingleSwapTokenAddress,
  // SingleSwapTokenABI,
  // SwapMultiHopAddress,
  // SwapMultiHopABI,
  // IWETHAddress,
  // IWETABI,
} from "/Utils/appFeatures.js";

import { IWETHABI } from "./constants";
import ERC20 from "/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json";

export const swapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
  //USESTATE
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);
  const addToken = [
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    // "LifeToken id",
  ];

  //FETCH DATA
  const fetchingData = async () => {
    try {
      //GET USER ACCOUNT
      const userAccount = await checkIfWalletIsConnected();
      setAccount(userAccount);
      //CREATE PROVIDER
      const web3modal = new Web3Model();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      //Check Balance
      const balance = await provider.getBalance(userAccount);
      const convertBal = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(convertBal);
      setEther(ethValue);

      //GET NETWORK
      const network = await provider.getNetwork();
      console.log(network.name);
      SetNetworkConnect(network.name);

      //ALL TOKEN BALANCE AND DATA
      addToken.map(async (el, i) => {
        //GETTING CONTRACT
        const contract = new ethers.Contract(el, ERC20, provider);
        //GETTING BALNCE OF TOKEN
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();
        const convertTokenBal = ethers.utils.formatEther(tokenLeft);
        //GET NAME AND SYMBOL

        const symbol = await contract.symbol();
        const name = await contract.name();

        setTokenData.push({
          name: name,
          symbol: symbol,
          tokenBalance: convertTokenBal,
        });
        console.log(tokenData);
      });

      //DAI BALANCE
      const wethContract = await connectingWithIWITHToken();
      const wethBal = await wethContract.balanceOf(userAccount);
      const wethToken = BigNumber.from(wethBal).toString();
      const convertwethTokenBal = ethers.utils.formatEther(wethToken);
      setWeth9(convertwethTokenBal);

      //DAI BALANCE
      const daiContract = await connectingWithDAIToken();
      const daiBal = await daiContract.balanceOf(userAccount);
      const daiToken = BigNumber.from(daiBal).toString();
      const convertdaiTokenBal = ethers.utils.formatEther(daiToken);
      setDai(convertdaiTokenBal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <SwapTokenContextProvider
      value={{ account, dai, weth9, networkConnect, ether }}
    >
      {children}
    </SwapTokenContextProvider>
  );
};
