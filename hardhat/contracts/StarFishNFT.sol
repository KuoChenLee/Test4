// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../ERC721R/contracts/ERC721RExample.sol";

contract StarFishNFT is ERC721RExample{
    function sayHi() external returns(string memory){
        return "Hi Lee!";
    }
}