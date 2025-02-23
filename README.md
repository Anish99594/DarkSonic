# DarkSonic

## Project Front Page
Here is a preview of the project's front page:

### Dashboard

## Overview
DarkSonic is an AI-powered blockchain assistant designed to interact with the Sonic network. It leverages OpenAI's GPT-4o-mini model to provide a conversational interface for executing blockchain operations such as checking wallet balances, sending transactions, and deploying smart contracts. The assistant adopts the persona of Darth Vader, delivering responses in a commanding and cryptic tone.

## Key Features
- **Conversational Blockchain Assistant**: Execute blockchain operations via natural language commands.
- **Wallet Operations**: Retrieve wallet balances and addresses.
- **Transaction Management**: Send transactions with customizable parameters.
- **Smart Contract Deployment**: Deploy ERC20 tokens and interact with existing contracts.
- **API Integrations**: Retrieve price feeds from Pyth Network and execute swaps using KyberSwap.
- **Robust Error Handling**: Comprehensive feedback for failed operations.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- TypeScript
- OpenAI API key
- Environment variables for wallet private key and configurations

### Installation
Clone this repository to your local machine:

```sh
git clone https://github.com/yourrepo/darksonic.git
cd darksonic
```

Install dependencies:

```sh
bun install
```

Set up environment variables by creating a `.env` file in the root directory and adding the required keys:

```sh
OPENAI_API_KEY=your_openai_api_key
WALLET_PRIVATE_KEY=your_wallet_private_key
```

### Deployment
To start the assistant, run:

```sh
bun run src/index.ts
```

Users can interact with the assistant in the command line. Type **"exit"** to end the session.

## Contract Functions

### **Read Operations**
- `get_balance()`: Retrieves wallet balances on the Sonic network.
- `get_wallet_address()`: Retrieves the connected wallet's address.
- `get_availablepricefeeds()`: Lists price feeds available in Pyth.
- `get_pricefeed(feedId)`: Retrieves details for a specific price feed in Pyth.
- `get_swaproute(from, to, amount)`: Finds the best swap route using KyberSwap.
- `get_availabletokensforswap()`: Lists available tokens for swapping in Sonic via KyberSwap.

### **Write Operations**
- `send_transaction(value, data, gasSettings)`: Sends transactions with customizable parameters.
- `deploy_erc20(name, symbol, supply)`: Deploys an ERC20 token with customizable attributes.
- `execute_swap(from, to, amount)`: Executes a token swap in KyberSwap.

## Events
- `TransactionSent(transactionId, status)`: Emitted when a transaction is processed.
- `ContractDeployed(contractAddress, owner)`: Emitted when an ERC20 contract is deployed.
- `SwapExecuted(from, to, amount, status)`: Emitted when a token swap is successfully executed.

## Future Development
- **Advanced Conversational AI Enhancements**: Improve AI response accuracy and blockchain automation.
- **Multi-Chain Support**: Extend support beyond Sonic network.
- **Enhanced Smart Contract Deployment**: Enable more customizable smart contract templates.

## Contributing
Contributions are welcome! To contribute, fork this repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Support
For any inquiries or support, open an issue on GitHub or contact the team via [X](https://x.com/nes_campos).

## Links
- **GitHub Repository**: [DarkSonic Repo](https://github.com/yourrepo/darksonic)
- **Project Website**: [DarkSonic Website](https://darksonic.com)
- **Demo Video**: [Watch Here](https://darksonic.com/demo)

