import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ignition-ethers";

const PRIVATE_KEY = vars.get("PRIVATE_KEY");
const ARBISCAN_KEY = vars.get("ARBISCAN_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    arbSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: ARBISCAN_KEY,
    },
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
