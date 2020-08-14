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
      </Container>
    </div>
  );
};

export default NosClientsSection;
