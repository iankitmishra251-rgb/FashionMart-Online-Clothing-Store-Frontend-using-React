import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web_Series from "./components/WebSeries";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/webseries" element={<Web_Series />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;