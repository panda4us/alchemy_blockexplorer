import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { Form } from "react-router-dom";
//import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function Transaction() {
  let {txHash}  =useParams();
  const [blockNumber, setBlockNumber] = useState();
  const [transactionHash, setTransactionHash] = useState();
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [timestamp, setTimestamp] = useState();
  const [status, setStatus] = useState();
  const [gasUsed, setGasUsed] = useState();
  const [contractAddress, setContractAddress] = useState();

  useEffect(() => {
    
    
    
    async function getTransactionData(txHash) {
      //let blockNumber = await alchemy.core.getBlockNumber() ;
      //let block = await alchemy.core.getBlock(blockNumber);
      const tx = await alchemy.core.getTransactionReceipt(txHash);
      console.log(tx);
      const blockNumber = tx['blockNumber'];
      const to =tx['to'];
      const from = tx['from'];
      
      const status = tx['status'];
      const gasUsed = tx ['gasUsed']['_hex'];
      const contractAddress = tx['contractAddress'];
      console.log(contractAddress, gasUsed, status, from, to ,blockNumber);
      setBlockNumber(blockNumber);
      setTo(to);
      setFrom(from);
      setTimestamp(timestamp);
      setStatus(status);
      setGasUsed(gasUsed);
      setContractAddress(contractAddress);



    }
    
    
    getTransactionData(txHash);
    /*async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

                        
    */
    
    
    //getBlockNumber(); 
  });

  return <div className="App">
                       
                    <h1>TxHash: {txHash} </h1>
                     BlockNumber:   {blockNumber}   Status:  {status}
                     <h2>     From: {from}  To:  {to} </h2>
                    Gas Used: {gasUsed} ContractAddress: {contractAddress} 
                    </div>;
                        <Form method="post" action="/events">
                        <input type="text" name="title" />
                        <input type="text" name="description" />
                        <button type="submit">Create</button>
                      </Form>
}

export default Transaction;
