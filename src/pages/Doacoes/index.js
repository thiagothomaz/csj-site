/* eslint-disable jsx-a11y/alt-text */

import "./index.css";

export function Doacoes() {
  return (
    <div>
      <section className="text-center container">
        <div className="row pt-4 pb-4">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Ajude a nossa Casa!</h1>
            <p className="lead text-muted">
              Nós atendemos 190 crianças e adolescentes diariamente e precisamos
              da sua ajuda para manter este espaço. Toda ajuda é bem vinda!
            </p>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center">
        <img src="img/doacao.jpeg" />
      </div>
    </div>
  );
}
