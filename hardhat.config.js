require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/FJMnbTBmWcaIsaMX8zzK7XyiA26ubum0",
      accounts: [
        "9402f30a8d8ef1d944c15150a255da8417fbe98d862d16d40bbfe97ab86c703f",
      ],
    },
  },
};
