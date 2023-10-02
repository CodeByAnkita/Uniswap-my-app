require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  network: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/7bGsMJRYkk3TGFxYZhtwOrbnGk2uIMot",
      },
    },
  },
};
