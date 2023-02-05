//componente pagina inicio

import Carousel from "react-bootstrap/Carousel";

function Landing() {
  return (
    <div className="landing ">
      <div className="landing ">
        <h1>Bienvenidos</h1>
        <h2>
          En este sitio encontraras todos los personajes de Rick and Morty,
          locaciones y más
        </h2>
      </div>
      <Carousel className="imagenL text-dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?itok=6Bguw2Cu"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Personajes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Locaciones</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.blogs.es/b6d70c/rick-y-morty/450_1000.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Episodios</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Landing;
