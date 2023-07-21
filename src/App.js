
import React from 'react'
import './App.css';
import Gdata from "./guitar.json";
import Sdata from "./strings.json";
import Pdata from "./stuff.json"
import Articles from './components/Articles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Product from './components/Product';
import Home from './components/Home';
import { useState } from 'react';
import ScrollTop from './components/ScrollTop';




function App() {
  const guitar=Gdata.articles;
  const string=Sdata.articles;
  const stuff=Pdata.articles;
  return (

    <Router>
       <ScrollTop/>
      <Routes>
       
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/guitars" element={<Product title={"★ Trending Guitars ★"} ele={guitar}/>}/>
        <Route exact path="/strings" element={<Product title={"★ Top Strings ★"} ele={string}/>}/>
        <Route exact path="/stuff" element={<Product title={"★ Top Equipment ★"} ele={stuff}/>}/>
        {/* <Route exact path="/articles" element={<Articles/>}/> */}
        <Route path= "/:itemType/:itemName"  element={<Articles/>}/>
      </Routes>
    </Router>
  )
}

export default App