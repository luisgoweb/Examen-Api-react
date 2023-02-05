// Componente de consumo de la api

import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Button from "react-bootstrap/Button";
import Buscador from "./Buscador";
import Header from "./Header";

function MiApi() {

  //Variables de estado

  const [personajes, setPersonajes] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const [nombreBusqueda, setNombreBusqueda] = useState("");
  const [estadoBusqueda, setEstadoBusqueda] = useState("alive");

  useEffect(() => {
    obtenerDatos()
  }, []);

  const inputFiltro = (e) => {
    setNombreBusqueda(e.target.value);
  };

  const selectFiltro = (e) => {
    setEstadoBusqueda(e.target.value);
  };

   //funcion para obtener los datos
   const obtenerDatos = async () => {
    try {
      const URL = "https://rickandmortyapi.com/api/character";
      const response = await fetch(URL);
      const data = await response.json();
      setPersonajes(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  //Funcion para filtrar el array desde la api
  const filtrar = async () => {
    try {
      const URL = `https://rickandmortyapi.com/api/character/?name=${nombreBusqueda}&status=${estadoBusqueda}`;
      const response = await fetch(URL);
      const data = await response.json();
      setPersonajes(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert(error.message);
    }
  };

  //Funcion para cargar la siguiente pagina de elementos del array
  const nextPage = async () => {
    try {
      const URL = next;
      const response = await fetch(URL);
      const data = await response.json();
      setPersonajes(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert('Esta es la ultima pagina');
    }
  };

  //Funcion para cargar la pagina previa de elementos del array
  const prevPage = async () => {
    try {
      const URL = prev;
      const response = await fetch(URL);
      const data = await response.json();
      setPersonajes(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert('Esta es la primera pagina');
    }
  };

  return (
    <>
      <Header />
      <Buscador
        inputFiltro={inputFiltro}
        filtrar={filtrar}
        selectFiltro={selectFiltro}
      />
      <div className="paginacion">
        <Button variant="dark" className="boton" onClick={prevPage}>
          Anterior
        </Button>
        <Button variant="dark" className="boton" onClick={nextPage}>
          Siguiente
        </Button>
      </div>
      <div className="tarjeta">
        {personajes.map((personaje) => (
          <div>
            <Cards
              image={personaje.image}
              name={personaje.name}
              status={
                personaje.status == "Alive" ? (
                  <span className="vivo">{personaje.status}</span>
                ) : (
                  <span className="muerto">{personaje.status}</span>
                )
              }
              species={personaje.species}
              gender={personaje.gender}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default MiApi;
