// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre, { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const TestContractFactory: ContractFactory = await ethers.getContractFactory(
    'TestContract',
  );
  const testContract: Contract = await TestContractFactory.deploy();
  await testContract.deployed();
  // console.log('TestContract deployed to: ', testContract.address);

  // const sig = testContract.interface.functions.getBalance;
  // console.log(sig);

}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
