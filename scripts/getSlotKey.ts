import hre, { ethers, network, waffle } from 'hardhat';
import { HttpNetworkConfig} from 'hardhat/types';

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL);
    const signers = await ethers.getSigners();
    const signer = signers[0];
    console.log(signer.address);

    const TestContractAbi = [
        "function updateBalance(address addr, uint amount) public",
        "function getBalance(address addr) public view returns (uint)"
    ];

    // const testContract = new ethers.Contract("0xB9192201a84Ac4E30A49485ec9c0DB96d95e2668", TestContractAbi, provider);
    // console.log(await testContract.getBalance(signer.address));
    // const testContractWithSigner = testContract.connect(signer);
    // console.log(await testContractWithSigner.updateBalance("0x0000000000000000000000000000000000000000", 7));
    // console.log(await testContract.getBalance("0x0000000000000000000000000000000000000000"));
    // const sig = testContract.interface.getSighash('updateBalance');
    // console.log(sig)

    console.log(ethers.utils.keccak256("0x0000000000000000000000002842c82E20ab600F443646e1BC8550B44a513D820000000000000000000000000000000000000000000000000000000000000002"))
    console.log(getSlotKey(BigInt("0x2842c82E20ab600F443646e1BC8550B44a513D82"), BigInt(2)))
}

main();

function getSlotKey(address: bigint, slot: bigint): string {
    const paddedSlot = slot.toString(16).padStart(64, '0');
    const paddedAddress = address.toString(16).padStart(64, '0');
    return ethers.utils.keccak256('0x' + paddedAddress + paddedSlot);
}



