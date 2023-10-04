// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DataRoyaleAccess {
    IERC20 public royaleCoin =
        IERC20(0xDb499857812569403F0aA1036d453d30945C8751);

    struct Dataset {
        address owner;
        string description;
        uint256 price;
        string[] dataLinks;
    }

    mapping(uint256 => Dataset) public datasets;
    mapping(uint256 => mapping(address => bool)) public accessGranted;

    event DatasetAccessPurchased(address indexed buyer, uint256 tokenId);

    function uploadDataset(
        string memory description,
        uint256 price,
        string[] memory initialDataLinks
    ) external returns (uint256) {
        uint256 newTokenId = uint256(
            keccak256(
                abi.encodePacked(msg.sender, description, block.timestamp)
            )
        ); // Unique ID generation

        datasets[newTokenId] = Dataset({
            owner: msg.sender,
            description: description,
            price: price,
            dataLinks: initialDataLinks
        });

        return newTokenId;
    }

    function buyDatasetAccess(uint256 tokenId) external {
        Dataset storage dataset = datasets[tokenId];
        require(dataset.owner != address(0), "Dataset not found");
        require(!accessGranted[tokenId][msg.sender], "Access already granted");
        require(
            royaleCoin.allowance(msg.sender, address(this)) >= dataset.price,
            "Allowance not set or insufficient"
        );

        royaleCoin.transferFrom(msg.sender, dataset.owner, dataset.price);
        accessGranted[tokenId][msg.sender] = true;

        emit DatasetAccessPurchased(msg.sender, tokenId);
    }

    function hasDatasetAccess(
        uint256 tokenId,
        address user
    ) external view returns (bool) {
        return accessGranted[tokenId][user];
    }

    function getDatasetDetails(
        uint256 tokenId
    ) external view returns (Dataset memory) {
        return datasets[tokenId];
    }
}
