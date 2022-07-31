import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';
import { network } from 'hardhat';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.bscMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ASCIIDegens',
  tokenName: 'ASCII-Degen',
  tokenSymbol: 'ASCIID',
  hiddenMetadataUri: 'ipfs://bafybeiffn6jxfgf47cfc4zndpq4nfnvuljolmaifvaizpxuogs7b7o43cm/hidden.json',
  maxSupply: 250,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x18A3d476e7dd28BB8a3619b19132b0f5F5724dDB',
  marketplaceIdentifier: 'ASCII-Crosschain-Degens',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
