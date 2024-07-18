

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import PropertyImage1 from "../../img/property-1.jpg";
import PropertyImage2 from "../../img/property-2.jpg";
import PropertyImage3 from "../../img/property-3.jpg";

function PropertyPage() {
    const [web3, setWeb3] = useState(null);
    const [properties, setProperties] = useState([]);
    const [connected, setConnected] = useState(true);

    useEffect(() => {
        async function initWeb3() {
            try {
                if (window.ethereum) {
                    const web3 = new Web3(window.ethereum);
                    setWeb3(web3);
                    setConnected(false);
                } else {
                    console.log("Please install MetaMask or use a dapp browser.");
                }
            } catch (error) {
                console.error("Error initializing Web3:", error);
            }
        }
        initWeb3();
    }, []);

    useEffect(() => {
        async function fetchProperties() {
            try {
                // Fetch properties from an API or hardcoded data
                // For demonstration, let's assume we have hardcoded property data
                const propertiesData = [
                    {
                        id: 1,
                        name: "Property 1",
                        price: 100000,
                        image: PropertyImage1,
                        returnPerTokenPerYear: 500,
                        rentalAmount: 2000
                    },
                    {
                        id: 2,
                        name: "Property 2",
                        price: 150000,
                        image: PropertyImage2,
                        returnPerTokenPerYear: 600,
                        rentalAmount: 2500
                    },
                    {
                        id: 3,
                        name: "Property 3",
                        price: 200000,
                        image: PropertyImage3,
                        returnPerTokenPerYear: 800,
                        rentalAmount: 3000
                    }
                    // Add more properties as needed
                ];
                setProperties(propertiesData);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        }

        fetchProperties();
    }, []);


    async function buyTokens(propertyId) {
        try {
            // Check if Web3 is connected
            if (!connected) {
                // Prompt the user to connect their wallet using MetaMask
                if (window.ethereum) {
                    await window.ethereum.enable();
                    setConnected(true);
                } else {
                    throw new Error("Please install MetaMask or use a dapp browser.");
                }
            }

            // Ensure token amount is greater than 0
            if (tokenAmount <= 0) {
                throw new Error("Please enter a valid token amount.");
            }

            // Calculate total cost
            const totalPrice = tokenAmount * 10; // Assuming each token costs $10

            // Get account address
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];

            // Send transaction to buy tokens
            const transaction = await token.methods.transfer(account, tokenAmount).send({ from: account, value: totalPrice });

            console.log("Transaction successful:", transaction);


        } catch (error) {
            console.error("Error buying tokens:", error);
        }
    }


    return (
        <div className="container bg-white mt-5">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div
                        class="text-start mx-auto mb-5 wow slideInLeft"
                        data-wow-delay="0.1s"
                    >
                        <h1 class="mb-3">My Property Listing</h1>
                        <p>
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                            dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                            rebum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                {properties.map(property => (
                    <div key={property.id} className="col mb-4 wow fadeInUp " data-wow-delay="0.5s">
                        <div className="card">
                            <img src={property.image} className="card-img-top" alt={property.name} />
                            <div className="card-body">
                                <h5 className="card-title">{property.name}</h5>
                                <p className="card-text">Price: ${property.price}</p>
                                <p className="card-text">Description: {property.description}</p>
                                <p className="card-text">Return per Token (Per Year): ${property.returnPerTokenPerYear}</p>
                                <p className="card-text">Rental Amount: ${property.rentalAmount} per month</p>
                                <Link to={`/properties/${property.id}`} className="btn btn-primary">View Details</Link>
                                <button className="btn btn-primary" onClick={() => buyTokens(property.id)}>Buy Tokens</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}








export default PropertyPage;

