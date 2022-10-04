/* eslint-disable jsx-a11y/alt-text */

import "./index.css";

export function QuemSomos() {
  return (
    <div>
      <section className="text-center container">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Quem Somos?</h1>
            <p className="lead text-muted">Venha Conhecer A Casa São José</p>
          </div>
        </div>
      </section>

      <div className="d-flex">
        <figure className="d-flex flex-column justify-content-start  m-4">
          <img className="img" src="img/PHOTO-2020-02-21-11-02-.jpg" />
          <br />
          <img className="img" src="img/CÇA.jpg" />
          <br />
          <img className="img" src="img/XHUTE8449.JPG" />
        </figure>
        <div className="m-5">
          <h4>
            <b> Histórico:</b>
          </h4>
          <br />
          <p style={{ fontWeight: "bolder" }}>
            <span style={{ display: "inline-block", width: "3ch" }}>&#9;</span>{" "}
            Em 2003 a Paróquia da Trindade comemorou 150 anos de existência e
            como marco desta data importante escolheram 150 padrinhos que
            abraçaram a ideia de construir um local onde as crianças e
            adolescentes pudessem ficar no contra-turno escolar.
            <br />
            <br />
            <span style={{ display: "inline-block", width: "3ch" }}>
              &#9;
            </span>{" "}
            A inauguração da Casa São José aconteceu então em 23/03/2003 com a
            participação da comunidade da Serrinha e fazendo parte das
            comemorações do aniversário de Florianópolis daquele ano com a
            presença da prefeita da época, bispo e outras autoridades.
            <br />
            <br />
            <span style={{ display: "inline-block", width: "3ch" }}>&#9;</span>
            Com a intenção de dar continuidade aos trabalhos sociais
            desenvolvidos pela Ação Social da Trindade na comunidade da
            Serrinha, a Casa São José iniciou o trabalho atendendo 90 crianças e
            adolescentes (45 em cada período) oferecendo atividades
            socioeducativas. Ao longo dos anos a organização foi conseguindo
            novas parcerias, o que possibilitou a cada ano, a ampliação do
            atendimento que hoje acontece para 190 educandos de 6 à 15 anos, bem
            como do espaço físico com a construção do prédio 2 em 19/03/2009 e
            do prédio 3 em 05/04/2018.
            <br />
            <br />
            <span style={{ display: "inline-block", width: "3ch" }}>
              &#9;
            </span>{" "}
            Em 2013, a Organização se desvinculou do CNPJ da Ação Social da
            Trindade obtendo independência jurídica e maior autonomia,
            tornando-se Associação Casa São José.
            <br />
            <br />
            <span style={{ display: "inline-block", width: "3ch" }}>&#9;</span>A
            Casa tem sua inscrição no CMAS(Conselho Municipal de Assistência
            Social) e CMDCA(Conselho Municipal da Criança e do Adolescente),
            adequando-se às políticas de atendimento dos devidos conselhos e
            sendo um espaço de referência para a comunidade, fortalecendo as
            famílias no desempenho de seu papel de cuidados e proteção, onde
            avaliamos frequentemente a capacidade de atendimento buscando
            alternativas para as demandas identificadas.
            <br />
            <br />
            <span style={{ display: "inline-block", width: "3ch" }}>&#9;</span>
            Atualmente a Casa São José oferece três refeições diárias para cada
            criança, conta com 19 colaboradores e alguns voluntários. Dentre os
            serviços oferecidos, estão o atendimento psicológico, odontológico,
            assistencial e diversas oficinas socioeducativas e artísticas, tendo
            como principais parceiras a Paróquia da Santíssima Trindade e a
            Prefeitura Municipal de Florianópolis por meio de convênios com as
            Secretarias da Educação e da Assistência Social.
          </p>
        </div>

        <div className="d-flex flex-column justify-content-start m-4">
          <h4>
            A Casa São José é um ótimo lugar para desenvolver e expandir seus
            conhecimentos.
          </h4>
          <br />
          <p>--------------------</p>
          <h4>
            Várias opções de oficinas para estudar e se aprofundar em seus
            interesses.
          </h4>
          <br />
          <p>--------------------</p>
          <h4>
            Contamos com a colaboração de todos para podermos evoluir e aprender
            cada vez mais.
          </h4>
        </div>
      </div>
    </div>
  );
}
