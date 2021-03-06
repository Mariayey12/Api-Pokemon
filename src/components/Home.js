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
            El mundo de Pok??mon fue creado en 1995 y fue un universo donde los
            humanos, a veces llamados entrenadores, pod??an atrapar a estos
            pok??mon y qued??rselos como mascotas. La caracter??stica agregada a la
            trama de los dibujos animados fue que estas mascotas no solo se
            volver??an los mejores amigos de sus entrenadores, sino que tambi??n
            ser??an entrenados para luchar batallas, en su mayor??a amistosas,
            contra otros due??os de pok??mon. El ganador de este pelea a menudo
            ganar?? una medalla, competencia o alg??n otro tipo de honor. Con el
            paso de los a??os, la franquicia ha crecido exponencialmente y ahora
            hay m??s de 800 pok??mon y todos ellos tienen habilidades y
            personalidades diferentes. La pregunta que queremos hacer, y
            seguramente t?? tambi??n, es: ??qu?? pok??mon eres? ??Eres del tipo
            El??ctrico como Pikachu, o del tipo Ps??quico como Psyduck, o del tipo
            Fuego como Ponyta, o del tipo Planta como Bulbasaur? En realidad,
            solo hay una forma de averiguar cu??l de estos Pokemon eres, ??y es
            aqu?? con este quiz! ??Est??s listo para averiguar qui??n o qu?? eres? Y
            recuerda, tienes que atraparlos a todos, pero no puedes llegar a ser
            todos ellos. Solo necesitas ser uno, ??y es momento de averiguar
            qui??n es
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Home;
