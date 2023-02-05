import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import React from "react";
import Location from "./components/Location";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Episodios from "./components/Episodios";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/miapi">Personajes</Nav.Link>
            <Nav.Link href="/locations">Locaciones</Nav.Link>
            <Nav.Link href="/episodios">Episodios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/miapi" element={<MiApi />} />
        <Route exact path="/locations" element={<Location />} />
        <Route exact path="/episodios" element={<Episodios />} />
      </Routes>
    </Router>
  );
}

export default App;
