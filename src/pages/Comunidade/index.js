/* eslint-disable jsx-a11y/alt-text */

import "./index.css";
import Carousel from "react-bootstrap/Carousel";

export function Comunidade() {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: "400px" }}>
          <img src="img/foto3.jpeg" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img src="img/foto1.jpg" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img src="img/foto2.jpg" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
      <section className="text-center container">
        <div className="row pt-4">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Comunidade da Serrinha</h1>
          </div>
        </div>
      </section>
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img src="img/img1.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-text">Dia de jogos na praça.</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="img/img2.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-text">Dia das Crianças na comunidade.</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="img/img3.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-text">Mobilização para limpeza da praça.</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="img/img4.1.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-text">Equipe da Associação dos Moradores.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
