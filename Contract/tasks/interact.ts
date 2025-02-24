import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnits } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import ERC20Custody from "@zetachain/protocol-contracts/abi/evm/ERC20Custody.sol/ERC20Custody.json";
import { prepareData, ZetaChainClient } from "@zetachain/toolkit/client";
import { utils, ethers } from "ethers";
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  const client = new ZetaChainClient({ network: "testnet", signer });

  const data = prepareData(
    args.contract,
    ["address", "string", ],
    [args.targetToken, args.recipient, ]
  );

  let decimals = 18;

  if (args.erc20) {
    const contract = new ethers.Contract(args.erc20, ERC20.abi, signer);
    decimals = await contract.decimals();
  }

  const value = ethers.utils.parseUnits(args.amount, decimals);

  let inputToken = args.erc20
    ? await client.getZRC20FromERC20(args.erc20)
    : await client.getZRC20GasToken(hre.network.name);

  const refundFee = await client.getRefundFee(inputToken);
  const refundFeeAmount = ethers.utils.formatUnits(
    refundFee.amount,
    refundFee.decimals
  );
  
  if (value.lt(refundFee.amount)) {
    throw new Error(
      `Amount ${args.amount} is less than refund fee ${refundFeeAmount}. This means if this transaction fails, you will not be able to get the refund of deposited tokens. Consider increasing the amount.`
    );
  }

  let tx;

  if (args.erc20) {
    const custodyAddress = getAddress("erc20Custody", hre.network.name as any);
    if (!custodyAddress) {
      throw new Error(
        `No ERC20 Custody contract found for ${hre.network.name} network`
      );
    }

    const custodyContract = new ethers.Contract(
      custodyAddress,
      ERC20Custody.abi,
      signer
    );
    const tokenContract = new ethers.Contract(args.erc20, ERC20.abi, signer);
    const decimals = await tokenContract.decimals();
    const value = parseUnits(args.amount, decimals);
    const approve = await tokenContract.approve(custodyAddress, value);
    await approve.wait();

    tx = await custodyContract.deposit(signer.address, args.erc20, value, data);
    tx.wait();
  } else {
    const value = parseUnits(args.amount, 18);
    const to = getAddress("tss", hre.network.name as any);
    tx = await signer.sendTransaction({ data, to, value });
  }

  if (args.json) {
    console.log(JSON.stringify(tx, null, 2));
  } else {
    console.log(`🔑 Using account: ${signer.address}\n`);

    console.log(`🚀 Successfully broadcasted a token transfer transaction on ${hre.network.name} network.
📝 Transaction hash: ${tx.hash}
  `);
  }
};

task("interact", "Interact with the contract", main)
  .addParam("contract", "The address of a universal app contract on ZetaChain")
  .addParam("amount", "Amount of tokens to send")
  .addOptionalParam("erc20", "Send an ERC-20 token")
  .addFlag("json", "Output in JSON")
  .addParam("targetToken")
  .addParam("recipient")
