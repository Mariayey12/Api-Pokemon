import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

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
                    <h1>Las Plantas</h1>
                    <br></br>
                    <p >
                        La plantas nos proporcionan alimentos, medicinas, madera, combustible y fibras. Además, brindan cobijo a multitud de otros seres vivos, producen el oxígeno que respiramos, mantienen el suelo, regulan la humedad y contribuyen a la estabilidad del clima.

                        Existe una inmensa variedad de plantas, algunas muy simples, otras muy evolucionadas. Forman parte de todos los ecosistemas y se han adaptado a diversos climas y condiciones del suelo. Algunas pueden vivir en sitios muy secos, otras necesitan agua abundante.La mitad de los alimentos que consume la humanidad procede de sólo tres especies de plantas: el trigo, el arroz y el maíz.  Las plantas son una parte básica y elemental de la
                        vida sobre nuestro planeta. Sin ellas, nada podría ser
                        como lo conocemos, ni para el ser humano ni para
                        ninguno de los otros seres vivos. Por tanto, las
                        plantas tienen un gran importancia en la Tierra, pues
                        aportan desde oxígeno y alimento hasta refugio y
                        medicinas, entre muchos más beneficios.
                    </p>
                </Container>


            </div>
        </div>
    );
};

export default Home;