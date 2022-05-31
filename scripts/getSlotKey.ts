import hre, { ethers, network, waffle } from 'hardhat';
import { HttpNetworkConfig} from 'hardhat/types';


// To find the slot index for a given mapping in a contract, we can perform a getAccessList rpc call on the 
// contract to access the slot key of the variable. We can then iterate through all slot indexes as shown 
// to find the correct slot index for that mapping. 
async function main() {
    for (let i = 0; i < 20; i++) {
        console.log(getSlotKey(BigInt("0x5773D321394D20C36E4CA35386C97761A9BAe820"), BigInt(i)))
    }
}

main();

function getSlotKey(address: bigint, slot: bigint): string {
    const paddedSlot = slot.toString(16).padStart(64, '0');
    const paddedAddress = address.toString(16).padStart(64, '0');
    return ethers.utils.keccak256('0x' + paddedAddress + paddedSlot);
}



