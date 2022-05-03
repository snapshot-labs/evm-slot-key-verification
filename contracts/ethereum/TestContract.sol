// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract TestContract { 
    uint x; 
    uint y;
    mapping(address => uint) balances;

    function updateBalance(address addr, uint amount) public {
        balances[addr] = amount;
    }

    function getBalance(address addr) public view returns (uint) {
        return balances[addr];
    }
}