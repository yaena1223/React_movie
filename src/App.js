
import React, { useEffect } from 'react';
import {useState} from "react";

import Home from "./routes/Home";
import PropTypes from "prop-types"
import Detail from "./routes/Detail";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App(){
  return (
  <Router>
    <Routes>
      <Route path = "/hello" element = "<h1>hello</h1"></Route>
      <Route path = "/movie/:id" element = {<Detail/>}></Route>
      <Route path = "/" element = {<Home/>}></Route>
    </Routes>
  </Router>
  )

}


export default App;
