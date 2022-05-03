import hre, { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const TestContractFactory: ContractFactory = await ethers.getContractFactory(
    'TestContract',
  );
  const testContract: Contract = await TestContractFactory.deploy();
  await testContract.deployed();
  console.log('TestContract deployed to: ', testContract.address);

  // const sig = testContract.interface.functions.getBalance;
  // console.log(sig);

}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
