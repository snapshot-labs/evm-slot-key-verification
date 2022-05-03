import { task } from "hardhat/config";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

import { HardhatUserConfig } from "hardhat/types";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-truffle5";
import '@shardlabs/starknet-hardhat-plugin';
import 'hardhat-storage-layout';

const chainIds = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
};

const MNEMONIC = process.env.MNEMONIC || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

task("storage-layout", async (taskArgs, hre) => {
  await hre.storageLayout.export();
})

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
              enabled: true,
              runs: 1000,
          },
          outputSelection: {
              "*": {
                  "*": ["storageLayout"],
              },
            },
      },
      },
    ],
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    ethereumLocal: {
      url: 'http://localhost:8545',
    },
    starknetLocal: {
      url: 'http://localhost:8000',
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  starknet: {
    venv: 'active',
    network: 'starknetLocal',
  },
};

export default config;
