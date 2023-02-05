// Componente de consumo de la api

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import ListGroup from 'react-bootstrap/ListGroup';

function Location() {

  //Variables de estado

  const [locations, setLocations] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);

  useEffect(() => {
    obtenerDatos()
  }, []);

   //funcion para obtener los datos
   const obtenerDatos = async () => {
    try {
      const URL = "https://rickandmortyapi.com/api/location";
      const response = await fetch(URL);
      const data = await response.json();
      setLocations(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
      return;
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
      setLocations(data.results);
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
      setLocations(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
      return;
    } catch (error) {
      alert('Esta es la primera pagina');
    }
  };

  const ordenarAZ = () => {
    const orden =  [...locations].sort((a,b) => a.name > b.name)
    setLocations(orden)
  };
  const ordenarZA = () => {
    const orden =  [...locations].sort((a,b) => a.name < b.name)
    setLocations(orden)
  };


  return (
    <>
      <Header />
      <div className="paginacion">
        <Button variant="dark" className="boton" onClick={prevPage}>
          Anterior
        </Button>
        <Button variant="dark" className="boton" onClick={nextPage}>
          Siguiente
        </Button>
        <Button variant="dark" className="boton" onClick={ordenarAZ}>
          Ordenar (A-Z)
        </Button>
        <Button variant="dark" className="boton" onClick={ordenarZA}>
          Ordenar (Z-A)
        </Button>
      </div>
      <div className="tarjeta">
        {locations.map((location) => (
          <div>
            <Card style={{ width: '18rem' }} className="sombra textoCards m-3">
                <Card.Header className="bg-dark bg-gradient text-light">{location.name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Tipo: {location.type}</ListGroup.Item>
                    <ListGroup.Item>Dimension: {location.dimension}</ListGroup.Item>
                </ListGroup>
                </Card>
          </div>
        ))}
      </div>
    </>
  );
}
export default Location;
