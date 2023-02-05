//Componente para las tarjetas

import Card from "react-bootstrap/Card";

function Cards({ image, name, status, species, gender }) {
  return (
    <Card className="bg-dark sombra m-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fs-2 text-light tituloCard">{name}</Card.Title>
        <Card.Text className="text-light">Status: {status} </Card.Text>
        <Card.Text className="text-light">Especie: {species}</Card.Text>
        <Card.Text className="text-light">Genero: {gender}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
