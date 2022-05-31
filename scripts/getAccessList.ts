const Web3 = require('web3');

async function main() {
    const web3 = new Web3(process.env.GOERLI_URL);

    // Example LINK goerli balanceOf call
    let out = await web3.eth.createAccessList({
        from: '0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312',
        data: '0xf8b2cb4f0000000000000000000000002842c82E20ab600F443646e1BC8550B44a513D82',
        gas: '0x75300',
        gasPrice: '0x0',
        to: '0xB9192201a84Ac4E30A49485ec9c0DB96d95e2668'
    })
    console.log(out.accessList[0].storageKeys);

}

main();