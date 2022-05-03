# evm-slot-key-verification
The repo provides a function to compute the key of an Ethereum storage slot in Cairo. 

The Ethereum storage verifier [Fossil](https://github.com/OilerNetwork/fossil) allows one to verify any part of the Ethereum state on StarkNet. This enables a wide range of functionality including the on-chain voting protocol Snapshot X. It works by users submitting a proof to StarkNet of the contents of a specific storage slot on Ethereum that they require, and then that proof gets verified in a Cairo contract. However there is no mechanism to check that the slot the user submitted a proof of actually corresponds to the slot claimed. 

This repo provides a function to compute the key of a storage slot, which can then be compared against the key submitted as part of the proof. If the keys do not match then the contract will know that the proof is invalid.
