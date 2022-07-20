import { expect } from "chai";
import { ethers } from "hardhat";

const TOKEN_URI_1 =
  "https://bafybeihpjhkeuiq3k6nqa3fkgeigeri7iebtrsuyuey5y6vy36n345xmbi.ipfs.dweb.link/1";
const TOKEN_URI_2 =
  "https://bafybeihpjhkeuiq3k6nqa3fkgeigeri7iebtrsuyuey5y6vy36n345xmbi.ipfs.dweb.link/2";

describe("MyNFT", function () {
  it("NFT is minted successfully", async function () {
    const [owner, account1, account2] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNft = await MyNFT.deploy();
    await myNft.deployed();
    const mintTx = await myNft.mintNFT(account1.address, TOKEN_URI_1);
    await mintTx.wait();
    expect(await myNft.balanceOf(account1.address)).to.equal(1);
    expect(await myNft.tokenURI(1)).to.equal(TOKEN_URI_1);

    const mintTx2 = await myNft.mintNFT(account2.address, TOKEN_URI_2);
    await mintTx2.wait();
    expect(await myNft.balanceOf(account2.address)).to.equal(1);
    expect(await myNft.tokenURI(2)).to.equal(TOKEN_URI_2);
  });
});
