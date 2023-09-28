const hre = require("hardhat");

async function main() {
  //ERC20 BOO TOKEN
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(` Boo deployed to ${booToken.address}`);

  //ERC20 LIFE TOKEN
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(` Life deployed to ${lifeToken.address}`);

  //ERC20  SingleSwap TOKEN
  const SingleSwapToken = await hre.ethers.getContractFactory(
    " SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`SingleSwap deployed to ${singleSwapToken.address}`);

  //ERC20  SwapMultiHop TOKEN
  const SwapMultiHopToken = await hre.ethers.getContractFactory(
    " SwapMultiHopToken"
  );
  const swapMultiHopToken = await SwapMultiHopToken.deploy();
  await swapMultiHopToken.deployed();
  console.log(`SwapMultiHop deployed to ${swapMultiHopToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
