import React from "react";
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
import Sardines from "./Sardines";

function App() {
  return (
    <Routes>
      <Route path='/' element={<VendingMachine/>} />
      <Route path='/soda' element={<Snack snack='soda'/>}/>
      <Route path='/chips' element={<Snack snack='chips'/>}/>
      <Route path='sardines' element={<Sardines/>}/>
    </Routes>
  );
}

export default App;
