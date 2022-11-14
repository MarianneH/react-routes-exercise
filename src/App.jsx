import React from "react";
import "./App.css";
import Cats from "./pages/cats/cats";
import Dogs from "./pages/dogs/dogs";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
