import React from "react";
import { Col, Container, Row } from "reactstrap";
import AboutUs from "../components/Icons/AboutUs";

interface AProposSection {
  aProposRef: React.MutableRefObject<HTMLDivElement | null>;
}

const carouselItems = [
  {
    src:
      `${window.location.origin}/eurekaenvironnement.com/img/riviere-eaux-traitement.jpg`,
    altText: "Slide 1",
    caption: "",
  },
  {
    src:
      `${window.location.origin}/eurekaenvironnement.com/img/traitement-eaux-residentiel.jpg`,
    altText: "Slide 1",
    caption: "",
  },
];

const AProposSection = ({ aProposRef }: AProposSection) => {
  return (
    <div className="section text-center" ref={aProposRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <AboutUs className="icon-about-us" />
            <h1 className="title eureka">À Propos</h1>
            <hr />
          </Col>
        </Row>
        <Row className="section-space-bottom">
          <Col>
            <h4 className="description">
              Eurêka Environnement est une firme de génie-conseil spécialisée
              dans la gestion de l’eau et la conception de systèmes de
              traitement. Que vous souhaitiez prélever de l’eau d’un puits, la
              rendre potable, traiter vos eaux usées, gérer et réutiliser vos
              eaux pluviales, notre expertise vous permettra de réaliser tous
              vos projets. Notre mission : vous offrir un service personnalisé
              adapté à vos besoins ainsi qu’aux enjeux environnementaux actuels
              et futurs. Eurêka Environnement, des solutions innovantes à vos
              problèmes les plus complexes.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AProposSection;
