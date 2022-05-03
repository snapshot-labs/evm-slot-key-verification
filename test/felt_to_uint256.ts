import { StarknetContract } from 'hardhat/types/runtime';
import { expect } from 'chai';
import { starknet } from 'hardhat';

function splitUint256ToUint(low: bigint, high: bigint): bigint {
  const s1 = BigInt(2 ** 128);
  return low + high * s1;
}

async function setup() {
  const testUint256Factory = await starknet.getContractFactory(
    './contracts/starknet/test_felt_to_uint256.cairo'
  );
  const testUint256 = await testUint256Factory.deploy();
  return {
    testUint256: testUint256 as StarknetContract,
  };
}

describe('Words:', () => {
  it('The contract should covert a felt into a split uint256', async () => {
    const { testUint256 } = await setup();
    const input = BigInt('0x1');
    const { uint256: uint256 } = await testUint256.call('test_felt_to_uint256', {
      input: input,
    });
    const uint = splitUint256ToUint(uint256.low, uint256.high);
    expect(uint).to.deep.equal(input);
  }).timeout(60000);
});
