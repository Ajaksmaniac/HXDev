import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/*" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
