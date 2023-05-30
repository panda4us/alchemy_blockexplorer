import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Block from './pages/block';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Transaction from './pages/transaction';

 



//import Result from './Result'





function App(){
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  //const [valueBlock, setValueBlock] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (value){
      if (value.length===66){
      const link = "/transaction/"+value;
      //console.log("searching for some transactions!");
      //console.log(link);
      navigate(link);
    }
    else {
      const link = "/block/"+value;
      //console.log("searching for some block!");
      //console.log(link);
      navigate(link);
    }
      //,{ state: value, replace: true }
    }
  };  


  
  


 
  
    return (
        <div>
            <form onSubmit={handleSearch}>
            <label>
              Search TxHash:
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder = "enter txHash" />
            </label>
            <input type="submit" value="Submit" />
            </form>
     
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/block' element={<Block />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route exact path='/transaction/:txHash' element={<Transaction />} />
            </Routes>
            
        </div>
        
    );

    }  
 
export default App;