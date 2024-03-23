import React from "react";
import Dashboard from "./Components/Pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Itemcard from "./Components/Pages/Itemcard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item/:id" element={<Itemcard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
