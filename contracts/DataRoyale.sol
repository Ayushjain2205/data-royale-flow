// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DataRoyale is ERC721 {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    struct Dataset {
        address owner;
        string description;
        uint256 price;
        uint256 totalEarned;
        string[] dataLinks;
    }

    Counters.Counter private _tokenIdCounter;
    mapping(uint256 => Dataset) public datasets;

    event DatasetPurchased(address indexed buyer, uint256 tokenId);
    event DatasetTokenMinted(address indexed owner, uint256 tokenId);

    constructor() ERC721("DataRoyale", "DRD") {}

    modifier onlyOwnerOf(uint256 tokenId) {
        require(ownerOf(tokenId) == msg.sender, "Not dataset owner");
        _;
    }

    function uploadDataset(
        string memory description,
        uint256 price,
        string[] memory initialDataLinks
    ) external returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();

        datasets[newTokenId] = Dataset({
            owner: msg.sender,
            description: description,
            price: price,
            totalEarned: 0,
            dataLinks: initialDataLinks
        });

        _mint(msg.sender, newTokenId);
        emit DatasetTokenMinted(msg.sender, newTokenId);
        return newTokenId;
    }

    function buyDatasetAccess(uint256 tokenId) external payable {
        Dataset storage dataset = datasets[tokenId];
        require(msg.value == dataset.price, "Incorrect Ether sent");

        dataset.totalEarned = dataset.totalEarned.add(msg.value);

        emit DatasetPurchased(msg.sender, tokenId);
    }

    function checkDatasetAccess(uint256 tokenId) external view returns (bool) {
        return ownerOf(tokenId) == msg.sender;
    }

    function addDataLink(
        uint256 tokenId,
        string memory newDataLink
    ) external onlyOwnerOf(tokenId) {
        datasets[tokenId].dataLinks.push(newDataLink);
    }

    function removeDataLink(
        uint256 tokenId,
        uint256 linkIndex
    ) external onlyOwnerOf(tokenId) {
        require(
            linkIndex < datasets[tokenId].dataLinks.length,
            "Invalid index"
        );

        datasets[tokenId].dataLinks[linkIndex] = datasets[tokenId].dataLinks[
            datasets[tokenId].dataLinks.length - 1
        ];
        datasets[tokenId].dataLinks.pop();
    }

    function withdrawEarnings(uint256 tokenId) external onlyOwnerOf(tokenId) {
        uint256 earnings = datasets[tokenId].totalEarned;
        payable(msg.sender).transfer(earnings);
        datasets[tokenId].totalEarned = 0;
    }

    function getDatasetDetails(
        uint256 tokenId
    ) external view returns (Dataset memory) {
        return datasets[tokenId];
    }
}
