import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "deployしたCONTRACTのADDRESSを入れてください";
const BAYC_TOKEN_URI =
  "https://bafybeihpjhkeuiq3k6nqa3fkgeigeri7iebtrsuyuey5y6vy36n345xmbi.ipfs.dweb.link/2";

const STEPN_TOKEN_URI = "https://api.stepn.com/run/nftjson/101/96528793170";

async function main() {
  const [owner] = await ethers.getSigners();
  const myNft = await ethers.getContractAt("MyNFT", CONTRACT_ADDRESS);

  const mintTx = await myNft.mintNFT(owner.address, BAYC_TOKEN_URI);
  await mintTx.wait();

  const balance = await myNft.balanceOf(owner.address);
  console.log(balance);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
