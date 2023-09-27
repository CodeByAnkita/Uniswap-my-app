require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  network: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/7bGsMJRYkk3TGFxYZhtwOrbnGk2uIMot",
      },
    },
  },
};
