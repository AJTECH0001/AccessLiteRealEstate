import React from "react";
import Web3 from "web3"; // Import web3 library
import realEstateAbi from '../../../contracts/realEstateAbi.json';

function Practice() {
    // IPFS key provided
    const ipfsKey = "ipfs://bafkreihllip47mzkl56o2zkoce64efbsikbx4w3tu376zfw427dfqhctea";

    // Extract the hash from the IPFS key
    const hash = ipfsKey.split('ipfs://')[1];

    // Construct the IPFS URL
    const ipfsUrl = `https://ipfs.io/ipfs/${hash}`;

    const buyTokens = async () => {
        // Connect to the Ethereum blockchain
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const web3 = window.web3;

            // Instantiate your smart contract
            const contractAddress = "0x5299edAe22d7D0E8590724e18424545D320468A2";
            const contract = new web3.eth.Contract(realEstateAbi, contractAddress);

            // Call the buyTokens function
            try {
                const accounts = await web3.eth.getAccounts();
                await contract.methods.buyTokens().send({ value: "10000000000", from: accounts[0] });
                alert("Tokens bought successfully!");
            } catch (error) {
                console.error("Error buying tokens:", error);
                alert("Failed to buy tokens.");
            }
        } else {
            alert("Please install MetaMask to use this feature.");
        }
    };

    return (
        <div className="container-fluid bg-white">
            <div className="container mt-5 bg-white">
                <div className="text-dark fs-3 fw-bold mb-3">Practice</div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <img src={`https://ipfs.io/ipfs/${hash}`} alt="" />
                    <button className="btn btn-secondary" onClick={buyTokens}>
                        Buy Tokens
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Practice;
