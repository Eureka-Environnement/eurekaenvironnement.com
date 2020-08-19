import React from "react";
import { Container, Row, Col } from "reactstrap";
import Handshake from "components/Icons/Handshake";

interface NosClientsSection {
  nosClientsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NosClientsSection = ({ nosClientsRef }: NosClientsSection) => {
  return (
    <div className="section text-center" ref={nosClientsRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Handshake className="handshake"/>
            <h1 className="title eureka">Qui sont nos clients?</h1>
            <hr />
          </Col>
        </Row>
        <Row className="section-space-bottom">
          <Col>
            <h4 className="description">
              Vous! Que vous soyez un particulier, un commerçant, un
              entrepreneur, un gestionnaire d’usine ou opérateurs de station
              d’épuration ou d’assainissement, nous avons des solutions pour
              vous. Nous œuvrons tant dans les secteurs résidentiels,
              commercial, municipal et industriel.
            </h4>
          </Col>
        </Row>
        
        <Row>
          <Col md="4">
            <img className="img-circle img-no-padding img-responsive" src={`${window.location.origin}/eurekaenvironnement.com/img/traitement-des-eaux.jpg`} alt=""/>
            <p className="text-center">Description 1</p>
          </Col>
          <Col md="4">
            <img className="img-circle img-no-padding img-responsive" src={`${window.location.origin}/eurekaenvironnement.com/img/traitement-eaux-clarificateur.jpg`} alt=""/>
            <p className="text-center">Description 2</p>
          </Col>
          <Col md="4">
            <img className="img-circle img-no-padding img-responsive" src={`${window.location.origin}/eurekaenvironnement.com/img/fosse-septique.jpg`} alt=""/>
            <p className="text-center">Description 3</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosClientsSection;
