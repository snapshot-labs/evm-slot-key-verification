import { StarknetContract } from 'hardhat/types/runtime';
import { expect } from 'chai';
import { starknet, ethers } from 'hardhat';

function splitUint256ToUint(low: bigint, high: bigint): bigint {
  const s1 = BigInt(2 ** 128);
  return low + high * s1;
}

function getSlotKey(address: bigint, slot: bigint): string {
    const paddedSlot = slot.toString(16).padStart(64, '0');
    const paddedAddress = address.toString(16).padStart(64, '0');
    return ethers.utils.keccak256('0x' + paddedAddress + paddedSlot);
}

async function setup() {
  const slotKeyTestFactory = await starknet.getContractFactory(
    './contracts/starknet/slot_key_test.cairo'
  );
//   console.log(slotKeyTestFactory)
  const slotKeyTest = await slotKeyTestFactory.deploy();
  return {
    slotKeyTest: slotKeyTest as StarknetContract,
  };
}

describe('Get Slot Key:', () => {
  it('The contract should return the key of the slot', async () => {
    const { slotKeyTest } = await setup();
    const slot_index = BigInt(3);
    const address = BigInt('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
    const { slot_key: slot_key } = await slotKeyTest.call('test_get_slot_key', {
      slot_index: slot_index,
      mapping_key: address
    });
    const slot_key_hex = '0x'+splitUint256ToUint(slot_key.low, slot_key.high).toString(16);
    expect(slot_key_hex).to.equal(getSlotKey(address, slot_index));
  }).timeout(60000);
});
