import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";
import Products from "./screens/AddProductsPage.jsx";
import Login from "./screens/Login.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
