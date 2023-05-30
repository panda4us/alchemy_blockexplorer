import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
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

function Block() {
  
  
  const [blockNumber, setBlockNumber] = useState();
  //let blockN = useParams();
  //console.log(blockN["blockNumber"]);
  const [transactionCount, setTransactionCount] = useState();
  const [transactionList, setTransactionList] = useState();
  const [timestamp, setTimestamp] = useState();
  const [miner, setMiner] = useState();

  useEffect(() => {
    
    
    
    async function getTransactionCount() {
        let blockNumber = await alchemy.core.getBlockNumber();
        let block = await alchemy.core.getBlockWithTransactions(blockNumber);
        
        
        if (block){
            setTransactionList(block['transactions']);
            setTransactionCount(block['transactions'].length);
            setBlockNumber(blockNumber);
            setMiner(block['miner']);
            setTimestamp(block['timestamp']);
            console.log(block['transactions'].length);
    }
    }
    
    
    
    getTransactionCount();
    /*async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

                        
    */
    
    
    //getBlockNumber(); 
  });
  if (transactionList){
  return <div className="App">

                    Block Number: {blockNumber}  Timestamp:   {timestamp}   Miner:  {miner}
                    <h1>     Transactions Number: {transactionCount} </h1>
                    Transactions:
                    <ul>{transactionList.map(function(d, idx){
                        let ref= "/transaction/"+d["hash"];
                      return (<li key={idx}> To: {d["to"]} From: {d["from"]}  TxHash: <Link to={ref}>   {d["hash"]}</Link></li>)
                    })}
                    </ul>
                    </div>;
  } else{
    return <div className="App">Block Number: {blockNumber}  Timestamp:   {timestamp}   Miner:  {miner}
                    <h1>     Transactions Number: {transactionCount} </h1>
                    
                    </div>;
  }
}

export default Block;
