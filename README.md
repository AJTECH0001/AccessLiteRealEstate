# Overview

### AssetLite is a Solidity smart contract designed to manage digital assets on the Zetachain platform. It provides functionalities for creating, transferring, and managing ownership of digital properties.

## Core Functionalities

### Property Creation:
 Allows the contract owner to create new digital properties with specified total supply, price per token, and metadata (URI).
### Ownership Transfer:
 Enables property owners to transfer ownership to other addresses.
### Ownership Tracking:
 Maintains records of ownership shares for each property and address.
Metadata Management: Stores property-related metadata (URI) for reference.

## Contract Structure

### SystemContract: Interacts with the Zetachain network.
### owner: The contract's owner, with exclusive rights to create properties.
### nextPropertyId: A counter for generating unique property identifiers.
### Property struct: Defines the properties of a digital asset, including owner, total supply, remaining supply, price per token, and URI.
### properties mapping: Stores property details indexed by property ID.
### ownershipShares mapping: Tracks ownership shares of each address for a given property.

## Events
### PropertyCreated: Emitted when a new property is created.
### OwnershipTransferred: Emitted when ownership of a property changes.

## Modifiers
### onlyOwner: Restricts function access to the contract owner.
### propertyExists: Ensures the specified property ID is valid.

## Usage
### Deployment: Deploy the contract to the Zetachain, providing the SystemContract address.
### Property Creation: The contract owner can create new properties using createProperty.
### Ownership Transfer: Property owners can transfer ownership using transferOwnership.
### Ownership Verification: Check ownership shares using getOwnershipShares.
### Property Metadata: Retrieve property metadata using getPropertyURI.