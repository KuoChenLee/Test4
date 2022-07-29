/** @type import('hardhat/config').HardhatUserConfig */


require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      chainId: 4,
    },
  },
  etherscan: {
    apikey: {


      rinkeby: process.env.ETHERSCAN_API,
    }
  }
};
