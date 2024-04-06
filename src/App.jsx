
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Footer from "./components/footer";

function App() {


  return (
   <>
     <NavBar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/careers" element={<Careers />} />
       </Routes>
     <Footer/>
   </>
  );
}

export default App;
