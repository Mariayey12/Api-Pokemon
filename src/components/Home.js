import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417890/frontend9/j3aboe0u1oeiqfuxugog.jpg"
            alt="First slide"
            height="350px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417891/frontend9/y4ydaqqyuwwayepw30ve.webp"
            alt="Second slide"
            height="350px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417891/frontend9/nksaaretqqdcqaollh11.jpg"
            alt="Third slide"
            height="350px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417891/frontend9/y4aicwslozwdi9okfybd.jpg"
            alt="First slide"
            height="350px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417890/frontend9/ypmbjdsnjrjke79bsosf.jpg"
            alt="Second slide"
            height="350px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/academiageek1/image/upload/v1651417892/frontend9/gswb8yke2krq0dxw0rgo.png"
            alt="Third slide"
            height="350px"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <Container>
          <br></br>
          <h1> Pokemones</h1>
          <br></br>
          <p>
            El mundo de Pokémon fue creado en 1995 y fue un universo donde los
            humanos, a veces llamados entrenadores, podían atrapar a estos
            pokémon y quedárselos como mascotas. La característica agregada a la
            trama de los dibujos animados fue que estas mascotas no solo se
            volverían los mejores amigos de sus entrenadores, sino que también
            serían entrenados para luchar batallas, en su mayoría amistosas,
            contra otros dueños de pokémon. El ganador de este pelea a menudo
            ganará una medalla, competencia o algún otro tipo de honor. Con el
            paso de los años, la franquicia ha crecido exponencialmente y ahora
            hay más de 800 pokémon y todos ellos tienen habilidades y
            personalidades diferentes. La pregunta que queremos hacer, y
            seguramente tú también, es: ¿qué pokémon eres? ¿Eres del tipo
            Eléctrico como Pikachu, o del tipo Psíquico como Psyduck, o del tipo
            Fuego como Ponyta, o del tipo Planta como Bulbasaur? En realidad,
            solo hay una forma de averiguar cuál de estos Pokemon eres, ¡y es
            aquí con este quiz! ¿Estás listo para averiguar quién o qué eres? Y
            recuerda, tienes que atraparlos a todos, pero no puedes llegar a ser
            todos ellos. Solo necesitas ser uno, ¡y es momento de averiguar
            quién es
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Home;
