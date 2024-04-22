import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HeadPhones from "./components/pages/HeadPhones";
import Speakers from "./components/pages/Speakers";
import EarPhones from "./components/pages/EarPhones";
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<EarPhones />} />
      </Routes>
      <Header />
    </div>
  );
};

export default App;
