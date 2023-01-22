require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Mq9t3o9PwZXDVGP6JJZURUy8mQASJLBH",
      accounts: ["dfe937276836c2315355e72c1a03f956ed525653cf2276f14421234072c425d9"],
    }
  }
};
